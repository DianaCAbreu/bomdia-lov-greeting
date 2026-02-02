import { useState } from "react";
import { Pickaxe, Target, TrendingUp, Ruler, Percent } from "lucide-react";
import { Header } from "@/components/dashboard/Header";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ProductionChart } from "@/components/dashboard/ProductionChart";
import { ProjectionGauge } from "@/components/dashboard/ProjectionGauge";
import { WeekSelector } from "@/components/dashboard/WeekSelector";
import { TeorChart } from "@/components/dashboard/TeorChart";
import { ComparisonTable } from "@/components/dashboard/ComparisonTable";
import {
  productionData,
  monthlyTotals,
  getWeeklyData,
  getDataWithRealized,
  calculateProjection,
} from "@/data/productionData";

const Index = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const projection = calculateProjection();
  const realizedData = getDataWithRealized();
  
  const displayData = selectedWeek === 0 
    ? productionData 
    : getWeeklyData(selectedWeek);

  const weeklyRealized = selectedWeek === 0 
    ? realizedData 
    : displayData.filter(d => d.zincRealizado !== null);

  // Cálculos baseados no período selecionado - Totais Previstos incluem todos os dias do período
  const periodZincRealized = weeklyRealized.reduce((acc, d) => acc + (d.zincRealizado || 0), 0);
  const periodZincPrevisto = displayData.reduce((acc, d) => acc + d.zincPrevisto, 0);
  const periodChumboRealized = weeklyRealized.reduce((acc, d) => acc + (d.chumboRealizado || 0), 0);
  const periodChumboPrevisto = displayData.reduce((acc, d) => acc + d.chumboPrevisto, 0);
  const periodDesenvRealized = displayData.reduce((acc, d) => acc + (d.desenvolvRealizado || 0), 0);
  const periodDesenvPrevisto = displayData.reduce((acc, d) => acc + (d.desenvolvPrevisto || 0), 0);
  const periodTeorZn = weeklyRealized.length > 0 
    ? weeklyRealized.reduce((acc, d) => acc + (d.teorZnRealizado || 0), 0) / weeklyRealized.length 
    : 0;
  const periodTeorZnPrevisto = monthlyTotals.teorZnPrevisto;

  // Cálculo de desempenho percentual
  const zincPerformance = periodZincPrevisto > 0 ? ((periodZincRealized / periodZincPrevisto) * 100) : 0;
  const chumboPerformance = periodChumboPrevisto > 0 ? ((periodChumboRealized / periodChumboPrevisto) * 100) : 0;
  const desenvPerformance = periodDesenvPrevisto > 0 ? ((periodDesenvRealized / periodDesenvPrevisto) * 100) : 0;
  const teorPerformance = periodTeorZnPrevisto > 0 ? ((periodTeorZn / periodTeorZnPrevisto) * 100) : 0;

  // Totais gerais para projeção
  const currentZinc = realizedData.reduce((acc, d) => acc + (d.zincRealizado || 0), 0);
  const currentChumbo = realizedData.reduce((acc, d) => acc + (d.chumboRealizado || 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title={selectedWeek === 0 ? "Zinco Produzido" : `Zinco - Semana ${selectedWeek}`}
            value={`${periodZincRealized.toFixed(0)} t`}
            subtitle={`Previsto: ${periodZincPrevisto.toFixed(0)} t`}
            icon={Pickaxe}
            variant="zinc"
            trend={{ value: Number(zincPerformance.toFixed(1)), isPositive: zincPerformance >= 100 }}
          />
          <MetricCard
            title={selectedWeek === 0 ? "Chumbo Produzido" : `Chumbo - Semana ${selectedWeek}`}
            value={`${periodChumboRealized.toFixed(0)} t`}
            subtitle={`Previsto: ${periodChumboPrevisto.toFixed(0)} t`}
            icon={Target}
            variant="lead"
            trend={{ value: Number(chumboPerformance.toFixed(1)), isPositive: chumboPerformance >= 100 }}
          />
          <MetricCard
            title={selectedWeek === 0 ? "Desenvolvimento" : `Desenv. - Semana ${selectedWeek}`}
            value={`${periodDesenvRealized.toFixed(1)} m`}
            subtitle={`Previsto: ${periodDesenvPrevisto.toFixed(1)} m`}
            icon={Ruler}
            variant="warning"
            trend={periodDesenvPrevisto > 0 ? { value: Number(desenvPerformance.toFixed(1)), isPositive: desenvPerformance >= 100 } : undefined}
          />
          <MetricCard
            title={selectedWeek === 0 ? "Teor Médio Zn" : `Teor Zn - Semana ${selectedWeek}`}
            value={`${periodTeorZn.toFixed(2)}%`}
            subtitle={`Previsto: ${periodTeorZnPrevisto.toFixed(2)}%`}
            icon={Percent}
            variant="success"
            trend={{ value: Number(teorPerformance.toFixed(1)), isPositive: teorPerformance >= 100 }}
          />
        </section>

        {/* Week Selector */}
        <section className="mb-6">
          <WeekSelector
            selectedWeek={selectedWeek}
            onWeekChange={setSelectedWeek}
            totalWeeks={5}
          />
        </section>

        {/* Production Charts */}
        <section className="mb-8 grid gap-6 lg:grid-cols-2">
          <ProductionChart
            data={displayData}
            title="Produção de Zinco - Previsto x Realizado"
            previstoKey="zincPrevisto"
            realizadoKey="zincRealizado"
            previstoLabel="Previsto"
            realizadoLabel="Realizado"
            previstoColor="hsl(200 12% 45%)"
            realizadoColor="hsl(200 30% 70%)"
          />
          <ProductionChart
            data={displayData}
            title="Produção de Chumbo - Previsto x Realizado"
            previstoKey="chumboPrevisto"
            realizadoKey="chumboRealizado"
            previstoLabel="Previsto"
            realizadoLabel="Realizado"
            previstoColor="hsl(220 10% 28%)"
            realizadoColor="hsl(220 12% 55%)"
          />
        </section>

        {/* Projections */}
        <section className="mb-8 grid gap-6 lg:grid-cols-2">
          <ProjectionGauge
            title="Projeção Mensal - Zinco"
            current={currentZinc}
            target={monthlyTotals.zincPrevisto}
            projected={Number(projection.projectedZinc)}
            unit="t"
            variant="zinc"
          />
          <ProjectionGauge
            title="Projeção Mensal - Chumbo"
            current={currentChumbo}
            target={monthlyTotals.chumboPrevisto}
            projected={Number(projection.projectedChumbo)}
            unit="t"
            variant="lead"
          />
        </section>

        {/* Teor Chart */}
        <section className="mb-8">
          <TeorChart data={displayData} title="Evolução dos Teores - Zinco e Chumbo" />
        </section>

        {/* Comparison Table */}
        <section className="mb-8">
          <ComparisonTable data={displayData} />
        </section>
      </main>
    </div>
  );
};

export default Index;
