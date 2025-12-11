import { cn } from "@/lib/utils";

interface WeekSelectorProps {
  selectedWeek: number;
  onWeekChange: (week: number) => void;
  totalWeeks: number;
}

export const WeekSelector = ({
  selectedWeek,
  onWeekChange,
  totalWeeks,
}: WeekSelectorProps) => {
  const weeks = Array.from({ length: totalWeeks }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Semana:</span>
      <div className="flex gap-1">
        {weeks.map((week) => (
          <button
            key={week}
            onClick={() => onWeekChange(week)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              selectedWeek === week
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {week}
          </button>
        ))}
        <button
          onClick={() => onWeekChange(0)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
            selectedWeek === 0
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
          )}
        >
          Mês
        </button>
      </div>
    </div>
  );
};
