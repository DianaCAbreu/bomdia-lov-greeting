import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "zinc" | "lead" | "success" | "warning" | "default";
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const variantStyles = {
  zinc: "border-zinc/30 bg-gradient-to-br from-zinc/10 to-zinc-dark/5",
  lead: "border-lead/30 bg-gradient-to-br from-lead/10 to-lead-dark/5",
  success: "border-success/30 bg-gradient-to-br from-success/10 to-success/5",
  warning: "border-warning/30 bg-gradient-to-br from-warning/10 to-warning/5",
  default: "border-border bg-card",
};

const iconStyles = {
  zinc: "text-zinc bg-zinc/10",
  lead: "text-lead bg-lead/10",
  success: "text-success bg-success/10",
  warning: "text-warning bg-warning/10",
  default: "text-primary bg-primary/10",
};

export const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
  trend,
  className,
}: MetricCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        variantStyles[variant],
        className
      )}
      style={{ animationDelay: "0.1s" }}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {value}
            </span>
            {trend && (
              <span
                className={cn(
                  "text-sm font-medium",
                  trend.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className={cn("rounded-lg p-3", iconStyles[variant])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-foreground/5 to-transparent" />
    </div>
  );
};
