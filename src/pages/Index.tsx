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

  const currentZinc = realizedData.reduce((acc, d) => acc + (d.zincRealizado || 0), 0);
  const currentChumbo = realizedData.reduce((acc, d) => acc + (d.chumboRealizado || 0), 0);
  const currentDesenv = realizedData.reduce((acc, d) => acc + (d.desenvolvRealizado || 0), 0);
  const avgTeorZn = realizedData.reduce((acc, d) => acc + (d.teorZnRealizado || 0), 0) / realizedData.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Zinco Produzido"
            value={`${currentZinc.toFixed(0)} t`}
            subtitle={`Meta: ${monthlyTotals.zincPrevisto} t`}
            icon={Pickaxe}
            variant="zinc"
            trend={{ value: Number(((currentZinc / monthlyTotals.zincPrevisto) * 100).toFixed(1)), isPositive: true }}
          />
          <MetricCard
            title="Chumbo Produzido"
            value={`${currentChumbo.toFixed(0)} t`}
            subtitle={`Meta: ${monthlyTotals.chumboPrevisto} t`}
            icon={Target}
            variant="lead"
            trend={{ value: Number(((currentChumbo / monthlyTotals.chumboPrevisto) * 100).toFixed(1)), isPositive: true }}
          />
          <MetricCard
            title="Desenvolvimento"
            value={`${currentDesenv.toFixed(1)} m`}
            subtitle={`Meta: ${monthlyTotals.desenvolvPrevisto} m`}
            icon={Ruler}
            variant="warning"
          />
          <MetricCard
            title="Teor Médio Zn"
            value={`${avgTeorZn.toFixed(2)}%`}
            subtitle={`Previsto: ${monthlyTotals.teorZnPrevisto}%`}
            icon={Percent}
            variant="success"
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
          <TeorChart data={weeklyRealized} title="Evolução dos Teores - Zinco e Chumbo" />
        </section>

        {/* Comparison Table */}
        <section className="mb-8">
          <ComparisonTable data={productionData} />
        </section>
      </main>
    </div>
  );
};

export default Index;
