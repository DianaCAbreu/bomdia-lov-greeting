import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ProductionDay } from "@/data/productionData";

interface ProductionChartProps {
  data: ProductionDay[];
  title: string;
  previstoKey: keyof ProductionDay;
  realizadoKey: keyof ProductionDay;
  previstoLabel: string;
  realizadoLabel: string;
  previstoColor: string;
  realizadoColor: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="mb-2 font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {entry.value?.toFixed(2) || "—"}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ProductionChart = ({
  data,
  title,
  previstoKey,
  realizadoKey,
  previstoLabel,
  realizadoLabel,
  previstoColor,
  realizadoColor,
}: ProductionChartProps) => {
  const chartData = data.map((day) => ({
    date: day.date,
    [previstoLabel]: day[previstoKey],
    [realizadoLabel]: day[realizadoKey],
  }));

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(215 15% 55%)" 
            fontSize={12}
            tickLine={false}
          />
          <YAxis 
            stroke="hsl(215 15% 55%)" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
            formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
          />
          <Bar 
            dataKey={previstoLabel} 
            fill={previstoColor} 
            radius={[4, 4, 0, 0]}
            opacity={0.7}
          />
          <Bar 
            dataKey={realizadoLabel} 
            fill={realizadoColor} 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
