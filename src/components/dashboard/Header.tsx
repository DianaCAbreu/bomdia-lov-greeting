import { Mountain, Calendar } from "lucide-react";

export const Header = () => {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-zinc to-lead shadow-lg">
              <Mountain className="h-6 w-6 text-background" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">
                Acompanhamento de Produção
              </h1>
              <p className="text-sm text-muted-foreground">
                Mineração de Zinco & Chumbo • Dezembro 2024
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="capitalize">{currentDate}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
