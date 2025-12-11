import { ProductionDay } from "@/data/productionData";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Minus } from "lucide-react";

interface ComparisonTableProps {
  data: ProductionDay[];
}

export const ComparisonTable = ({ data }: ComparisonTableProps) => {
  const getVariance = (previsto: number, realizado: number | null) => {
    if (realizado === null) return null;
    return ((realizado - previsto) / previsto) * 100;
  };

  const getStatusIcon = (variance: number | null) => {
    if (variance === null) return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (variance >= 0) return <CheckCircle className="h-4 w-4 text-success" />;
    return <XCircle className="h-4 w-4 text-destructive" />;
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Detalhamento Diário</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Data</th>
              <th className="px-4 py-3 text-right font-medium text-zinc">Zinco Prev.</th>
              <th className="px-4 py-3 text-right font-medium text-zinc-glow">Zinco Real.</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Var.</th>
              <th className="px-4 py-3 text-right font-medium text-lead">Chumbo Prev.</th>
              <th className="px-4 py-3 text-right font-medium text-lead">Chumbo Real.</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Var.</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((day, index) => {
              const zincVar = getVariance(day.zincPrevisto, day.zincRealizado);
              const chumboVar = getVariance(day.chumboPrevisto, day.chumboRealizado);
              
              return (
                <tr 
                  key={index} 
                  className="border-b border-border/50 transition-colors hover:bg-muted/20"
                >
                  <td className="px-4 py-3">
                    <span className="font-medium text-foreground">{day.date}</span>
                    <span className="ml-2 text-muted-foreground">({day.dayOfWeek})</span>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-muted-foreground">
                    {day.zincPrevisto}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-foreground">
                    {day.zincRealizado?.toFixed(2) || "—"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {getStatusIcon(zincVar)}
                      {zincVar !== null && (
                        <span className={cn(
                          "text-xs font-medium",
                          zincVar >= 0 ? "text-success" : "text-destructive"
                        )}>
                          {zincVar >= 0 ? "+" : ""}{zincVar.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-muted-foreground">
                    {day.chumboPrevisto}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-foreground">
                    {day.chumboRealizado?.toFixed(2) || "—"}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1">
                      {getStatusIcon(chumboVar)}
                      {chumboVar !== null && (
                        <span className={cn(
                          "text-xs font-medium",
                          chumboVar >= 0 ? "text-success" : "text-destructive"
                        )}>
                          {chumboVar >= 0 ? "+" : ""}{chumboVar.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
