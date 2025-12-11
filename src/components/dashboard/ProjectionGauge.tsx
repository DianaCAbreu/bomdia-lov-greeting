import { cn } from "@/lib/utils";

interface ProjectionGaugeProps {
  title: string;
  current: number;
  target: number;
  projected: number;
  unit: string;
  variant: "zinc" | "lead";
}

export const ProjectionGauge = ({
  title,
  current,
  target,
  projected,
  unit,
  variant,
}: ProjectionGaugeProps) => {
  const currentPercent = (current / target) * 100;
  const projectedPercent = (projected / target) * 100;
  const isOnTrack = projectedPercent >= 100;

  const progressColor = variant === "zinc" 
    ? "bg-gradient-to-r from-zinc-dark to-zinc" 
    : "bg-gradient-to-r from-lead-dark to-lead";

  const projectedColor = isOnTrack ? "text-success" : "text-warning";

  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      
      <div className="space-y-6">
        {/* Current Progress */}
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-muted-foreground">Realizado</span>
            <span className="font-medium text-foreground">
              {current.toFixed(2)} {unit}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-muted">
            <div
              className={cn("h-full rounded-full transition-all duration-1000", progressColor)}
              style={{ width: `${Math.min(currentPercent, 100)}%` }}
            />
          </div>
          <div className="mt-1 text-right text-xs text-muted-foreground">
            {currentPercent.toFixed(1)}% da meta
          </div>
        </div>

        {/* Target */}
        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">Meta Mensal</span>
          <span className="font-semibold text-foreground">
            {target.toFixed(0)} {unit}
          </span>
        </div>

        {/* Projection */}
        <div className={cn("rounded-lg border-2 p-4", isOnTrack ? "border-success/30 bg-success/5" : "border-warning/30 bg-warning/5")}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Projeção Mensal</p>
              <p className={cn("text-2xl font-bold", projectedColor)}>
                {projected.toFixed(2)} {unit}
              </p>
            </div>
            <div className={cn("rounded-full px-3 py-1 text-sm font-medium", isOnTrack ? "bg-success/20 text-success" : "bg-warning/20 text-warning")}>
              {projectedPercent.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
