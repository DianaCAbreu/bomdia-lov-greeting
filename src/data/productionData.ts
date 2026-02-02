export interface ProductionDay {
  dayOfWeek: string;
  date: string;
  zincPrevisto: number;
  zincRealizado: number | null;
  chumboPrevisto: number;
  chumboRealizado: number | null;
  desenvolvPrevisto: number | null;
  desenvolvRealizado: number | null;
  teorZnPrevisto: number;
  teorZnRealizado: number | null;
  teorPbPrevisto: number;
  teorPbRealizado: number | null;
}

// Janeiro 2026 - Dados conforme arquivo Excel
export const productionData: ProductionDay[] = [
  // Semana 1 (01/01 - 07/01)
  { dayOfWeek: "Qui", date: "01/01", zincPrevisto: 143.06, zincRealizado: 150.8, chumboPrevisto: 29.00, chumboRealizado: 29.6, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 15.40, teorPbPrevisto: 2.96, teorPbRealizado: 3.99 },
  { dayOfWeek: "Sex", date: "02/01", zincPrevisto: 143.06, zincRealizado: 140.9, chumboPrevisto: 29.00, chumboRealizado: 27.2, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 14.89, teorPbPrevisto: 2.96, teorPbRealizado: 3.10 },
  { dayOfWeek: "Sáb", date: "03/01", zincPrevisto: 140.85, zincRealizado: 148.4, chumboPrevisto: 28.55, chumboRealizado: 25.7, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 14.31, teorPbPrevisto: 2.96, teorPbRealizado: 3.27 },
  { dayOfWeek: "Dom", date: "04/01", zincPrevisto: 140.85, zincRealizado: 150.0, chumboPrevisto: 28.55, chumboRealizado: 28.5, desenvolvPrevisto: 2.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 14.57, teorPbPrevisto: 2.96, teorPbRealizado: 3.66 },
  { dayOfWeek: "Seg", date: "05/01", zincPrevisto: 140.85, zincRealizado: 144.3, chumboPrevisto: 28.55, chumboRealizado: 30.5, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 14.61, teorPbPrevisto: 2.96, teorPbRealizado: 3.75 },
  { dayOfWeek: "Ter", date: "06/01", zincPrevisto: 140.85, zincRealizado: 147.1, chumboPrevisto: 28.55, chumboRealizado: 29.5, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 13.35, teorPbPrevisto: 2.96, teorPbRealizado: 3.18 },
  { dayOfWeek: "Qua", date: "07/01", zincPrevisto: 140.85, zincRealizado: 148.4, chumboPrevisto: 28.55, chumboRealizado: 31.3, desenvolvPrevisto: null, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 14.55, teorPbPrevisto: 2.96, teorPbRealizado: 3.19 },
  
  // Semana 2 (08/01 - 14/01)
  { dayOfWeek: "Qui", date: "08/01", zincPrevisto: 56.86, zincRealizado: 61.8, chumboPrevisto: 11.53, chumboRealizado: 14.2, desenvolvPrevisto: 2.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 14.58, teorPbPrevisto: 2.96, teorPbRealizado: 3.73 },
  { dayOfWeek: "Sex", date: "09/01", zincPrevisto: 140.85, zincRealizado: 146.25, chumboPrevisto: 28.55, chumboRealizado: 30.06, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 13.71, teorPbPrevisto: 2.96, teorPbRealizado: 3.42 },
  { dayOfWeek: "Sáb", date: "10/01", zincPrevisto: 140.85, zincRealizado: 143.94, chumboPrevisto: 28.55, chumboRealizado: 33.06, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 13.71, teorPbPrevisto: 2.96, teorPbRealizado: 3.54 },
  { dayOfWeek: "Dom", date: "11/01", zincPrevisto: 140.85, zincRealizado: 148.04, chumboPrevisto: 28.55, chumboRealizado: 27.86, desenvolvPrevisto: null, desenvolvRealizado: 7.0, teorZnPrevisto: 13.56, teorZnRealizado: 13.83, teorPbPrevisto: 2.96, teorPbRealizado: 3.75 },
  { dayOfWeek: "Seg", date: "12/01", zincPrevisto: 140.85, zincRealizado: 150.65, chumboPrevisto: 28.55, chumboRealizado: 33.23, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 14.65, teorPbPrevisto: 2.96, teorPbRealizado: 4.55 },
  { dayOfWeek: "Ter", date: "13/01", zincPrevisto: 140.85, zincRealizado: 154.08, chumboPrevisto: 28.55, chumboRealizado: 29.19, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 14.16, teorPbPrevisto: 2.96, teorPbRealizado: 3.56 },
  { dayOfWeek: "Qua", date: "14/01", zincPrevisto: 140.85, zincRealizado: 153.05, chumboPrevisto: 28.55, chumboRealizado: 31.33, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 15.79, teorPbPrevisto: 2.96, teorPbRealizado: 3.43 },
  
  // Semana 3 (15/01 - 21/01)
  { dayOfWeek: "Qui", date: "15/01", zincPrevisto: 140.85, zincRealizado: 145.41, chumboPrevisto: 28.55, chumboRealizado: 29.18, desenvolvPrevisto: 3.5, desenvolvRealizado: 7.0, teorZnPrevisto: 13.56, teorZnRealizado: 15.44, teorPbPrevisto: 2.96, teorPbRealizado: 3.50 },
  { dayOfWeek: "Sex", date: "16/01", zincPrevisto: 140.85, zincRealizado: 154.28, chumboPrevisto: 28.55, chumboRealizado: 28.4, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 16.26, teorPbPrevisto: 2.96, teorPbRealizado: 4.72 },
  { dayOfWeek: "Sáb", date: "17/01", zincPrevisto: 140.85, zincRealizado: 143.66, chumboPrevisto: 28.55, chumboRealizado: 26.2, desenvolvPrevisto: null, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 15.66, teorPbPrevisto: 2.96, teorPbRealizado: 3.71 },
  { dayOfWeek: "Dom", date: "18/01", zincPrevisto: 140.85, zincRealizado: 153.31, chumboPrevisto: 28.55, chumboRealizado: 29.49, desenvolvPrevisto: 3.5, desenvolvRealizado: 7.0, teorZnPrevisto: 13.56, teorZnRealizado: 15.40, teorPbPrevisto: 2.96, teorPbRealizado: 3.28 },
  { dayOfWeek: "Seg", date: "19/01", zincPrevisto: 140.85, zincRealizado: 147.58, chumboPrevisto: 28.55, chumboRealizado: 26.53, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 15.55, teorPbPrevisto: 2.96, teorPbRealizado: 3.17 },
  { dayOfWeek: "Ter", date: "20/01", zincPrevisto: 140.85, zincRealizado: 149.94, chumboPrevisto: 28.55, chumboRealizado: 29.31, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 15.39, teorPbPrevisto: 2.96, teorPbRealizado: 2.93 },
  { dayOfWeek: "Qua", date: "21/01", zincPrevisto: 140.85, zincRealizado: 145.14, chumboPrevisto: 28.55, chumboRealizado: 27.86, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 14.68, teorPbPrevisto: 2.96, teorPbRealizado: 3.18 },
  
  // Semana 4 (22/01 - 28/01)
  { dayOfWeek: "Qui", date: "22/01", zincPrevisto: 56.86, zincRealizado: 62.73, chumboPrevisto: 11.53, chumboRealizado: 18.42, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 13.48, teorPbPrevisto: 2.96, teorPbRealizado: 3.20 },
  { dayOfWeek: "Sex", date: "23/01", zincPrevisto: 140.85, zincRealizado: 148.93, chumboPrevisto: 28.55, chumboRealizado: 28.12, desenvolvPrevisto: null, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 15.71, teorPbPrevisto: 2.96, teorPbRealizado: 3.46 },
  { dayOfWeek: "Sáb", date: "24/01", zincPrevisto: 140.85, zincRealizado: 149.47, chumboPrevisto: 28.55, chumboRealizado: 26.63, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 15.09, teorPbPrevisto: 2.96, teorPbRealizado: 3.67 },
  { dayOfWeek: "Dom", date: "25/01", zincPrevisto: 140.85, zincRealizado: 147.99, chumboPrevisto: 28.55, chumboRealizado: 29.9, desenvolvPrevisto: null, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 14.50, teorPbPrevisto: 2.96, teorPbRealizado: 3.40 },
  { dayOfWeek: "Seg", date: "26/01", zincPrevisto: 140.85, zincRealizado: 143.82, chumboPrevisto: 28.55, chumboRealizado: 25.31, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 15.11, teorPbPrevisto: 2.96, teorPbRealizado: 3.51 },
  { dayOfWeek: "Ter", date: "27/01", zincPrevisto: 140.85, zincRealizado: 141.23, chumboPrevisto: 28.55, chumboRealizado: 23.06, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 12.74, teorPbPrevisto: 2.96, teorPbRealizado: 2.49 },
  { dayOfWeek: "Qua", date: "28/01", zincPrevisto: 140.85, zincRealizado: 150.59, chumboPrevisto: 28.55, chumboRealizado: 27.02, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 12.83, teorPbPrevisto: 2.96, teorPbRealizado: 2.95 },
  
  // Semana 5 (29/01 - 31/01)
  { dayOfWeek: "Qui", date: "29/01", zincPrevisto: 140.85, zincRealizado: 141.65, chumboPrevisto: 28.55, chumboRealizado: 25.53, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: 12.83, teorPbPrevisto: 2.96, teorPbRealizado: 2.95 },
  { dayOfWeek: "Sex", date: "30/01", zincPrevisto: 140.85, zincRealizado: 149.64, chumboPrevisto: 28.55, chumboRealizado: 28.56, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.5, teorZnPrevisto: 13.56, teorZnRealizado: 12.83, teorPbPrevisto: 2.96, teorPbRealizado: 2.95 },
  { dayOfWeek: "Sáb", date: "31/01", zincPrevisto: 138.08, zincRealizado: null, chumboPrevisto: 28.00, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 13.56, teorZnRealizado: null, teorPbPrevisto: 2.96, teorPbRealizado: null },
];

// Cálculo dos totais mensais baseados nos dados
const realizedData = productionData.filter(d => d.zincRealizado !== null);

// Totais Previstos (soma de todos os 31 dias)
const totalZincPrevisto = productionData.reduce((acc, d) => acc + d.zincPrevisto, 0);
const totalChumboPrevisto = productionData.reduce((acc, d) => acc + d.chumboPrevisto, 0);
const totalDesenvPrevisto = productionData.reduce((acc, d) => acc + (d.desenvolvPrevisto || 0), 0);

// Totais Realizados (soma dos dias com dados)
const totalZincRealizado = realizedData.reduce((acc, d) => acc + (d.zincRealizado || 0), 0);
const totalChumboRealizado = realizedData.reduce((acc, d) => acc + (d.chumboRealizado || 0), 0);
const totalDesenvRealizado = productionData.reduce((acc, d) => acc + (d.desenvolvRealizado || 0), 0);

// Médias de Teor
const avgTeorZnPrevisto = productionData.reduce((acc, d) => acc + d.teorZnPrevisto, 0) / productionData.length;
const avgTeorZnRealizado = realizedData.reduce((acc, d) => acc + (d.teorZnRealizado || 0), 0) / realizedData.length;
const avgTeorPbPrevisto = productionData.reduce((acc, d) => acc + d.teorPbPrevisto, 0) / productionData.length;
const avgTeorPbRealizado = realizedData.reduce((acc, d) => acc + (d.teorPbRealizado || 0), 0) / realizedData.length;

export const monthlyTotals = {
  zincPrevisto: totalZincPrevisto,        // ~4200.02 t
  zincRealizado: totalZincRealizado,      // 4425.37 t (30 dias realizados)
  chumboPrevisto: totalChumboPrevisto,    // ~851.36 t
  chumboRealizado: totalChumboRealizado,  // 852.59 t (30 dias realizados)
  desenvolvPrevisto: totalDesenvPrevisto, // 50.5 m
  desenvolvRealizado: totalDesenvRealizado, // 46.5 m
  teorZnPrevisto: avgTeorZnPrevisto,      // 13.56%
  teorZnRealizado: avgTeorZnRealizado,    // ~14.47%
  teorPbPrevisto: avgTeorPbPrevisto,      // 2.96%
  teorPbRealizado: avgTeorPbRealizado,    // ~3.44%
};

// Helper functions
export const getWeeklyData = (weekNumber: number) => {
  const startIndex = (weekNumber - 1) * 7;
  return productionData.slice(startIndex, startIndex + 7);
};

export const getDataWithRealized = () => {
  return productionData.filter(day => day.zincRealizado !== null);
};

export const calculateProjection = () => {
  const realizedDays = getDataWithRealized();
  const daysRealized = realizedDays.length;
  const totalDays = productionData.length;
  
  const avgZincDaily = realizedDays.reduce((acc, day) => acc + (day.zincRealizado || 0), 0) / daysRealized;
  const avgChumboDaily = realizedDays.reduce((acc, day) => acc + (day.chumboRealizado || 0), 0) / daysRealized;
  
  const projectedZinc = avgZincDaily * totalDays;
  const projectedChumbo = avgChumboDaily * totalDays;
  
  return {
    daysRealized,
    totalDays,
    avgZincDaily: avgZincDaily.toFixed(2),
    avgChumboDaily: avgChumboDaily.toFixed(2),
    projectedZinc: projectedZinc.toFixed(2),
    projectedChumbo: projectedChumbo.toFixed(2),
    zincCompletionPercent: ((Number(projectedZinc) / monthlyTotals.zincPrevisto) * 100).toFixed(1),
    chumboCompletionPercent: ((Number(projectedChumbo) / monthlyTotals.chumboPrevisto) * 100).toFixed(1),
  };
};
