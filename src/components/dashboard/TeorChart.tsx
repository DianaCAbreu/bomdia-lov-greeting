import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { ProductionDay } from "@/data/productionData";

interface TeorChartProps {
  data: ProductionDay[];
  title: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="mb-2 font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {entry.value?.toFixed(2) || "—"}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const TeorChart = ({ data, title }: TeorChartProps) => {
  const chartData = data.map((day) => ({
    date: day.date,
    "Teor Zn Previsto": day.teorZnPrevisto,
    "Teor Zn Realizado": day.teorZnRealizado,
    "Teor Pb Previsto": day.teorPbPrevisto,
    "Teor Pb Realizado": day.teorPbRealizado,
  }));

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            domain={[0, 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
            formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
          />
          <Line 
            type="monotone"
            dataKey="Teor Zn Previsto" 
            stroke="hsl(200 15% 65%)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
          <Line 
            type="monotone"
            dataKey="Teor Zn Realizado" 
            stroke="hsl(200 30% 70%)"
            strokeWidth={2}
            dot={{ fill: "hsl(200 30% 70%)", r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone"
            dataKey="Teor Pb Previsto" 
            stroke="hsl(220 8% 40%)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
          <Line 
            type="monotone"
            dataKey="Teor Pb Realizado" 
            stroke="hsl(220 12% 55%)"
            strokeWidth={2}
            dot={{ fill: "hsl(220 12% 55%)", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
