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

export const productionData: ProductionDay[] = [
  { dayOfWeek: "Seg", date: "1-Dec", zincPrevisto: 148, zincRealizado: 149.42, chumboPrevisto: 30, chumboRealizado: 31.88, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.50, teorZnPrevisto: 14.30, teorZnRealizado: 15.81, teorPbPrevisto: 3.08, teorPbRealizado: 3.82 },
  { dayOfWeek: "Ter", date: "2-Dec", zincPrevisto: 148, zincRealizado: 156.02, chumboPrevisto: 30, chumboRealizado: 32.80, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: 15.32, teorPbPrevisto: 3.08, teorPbRealizado: 3.39 },
  { dayOfWeek: "Qua", date: "3-Dec", zincPrevisto: 148, zincRealizado: 154.87, chumboPrevisto: 30, chumboRealizado: 19.85, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: 15.64, teorPbPrevisto: 3.08, teorPbRealizado: 2.89 },
  { dayOfWeek: "Qui", date: "4-Dec", zincPrevisto: 148, zincRealizado: 146.13, chumboPrevisto: 30, chumboRealizado: 32.25, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.50, teorZnPrevisto: 14.30, teorZnRealizado: 15.16, teorPbPrevisto: 3.08, teorPbRealizado: 3.74 },
  { dayOfWeek: "Sex", date: "5-Dec", zincPrevisto: 148, zincRealizado: 147.27, chumboPrevisto: 30, chumboRealizado: 33.33, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: 14.80, teorPbPrevisto: 3.08, teorPbRealizado: 3.85 },
  { dayOfWeek: "Sáb", date: "6-Dec", zincPrevisto: 148, zincRealizado: 144.75, chumboPrevisto: 30, chumboRealizado: 28.49, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: 16.23, teorPbPrevisto: 3.08, teorPbRealizado: 3.72 },
  { dayOfWeek: "Dom", date: "7-Dec", zincPrevisto: 148, zincRealizado: 147.85, chumboPrevisto: 30, chumboRealizado: 34.05, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.50, teorZnPrevisto: 14.30, teorZnRealizado: 13.78, teorPbPrevisto: 3.08, teorPbRealizado: 3.44 },
  { dayOfWeek: "Seg", date: "8-Dec", zincPrevisto: 148, zincRealizado: 139.36, chumboPrevisto: 30, chumboRealizado: 34.92, desenvolvPrevisto: null, desenvolvRealizado: 3.50, teorZnPrevisto: 14.30, teorZnRealizado: 13.83, teorPbPrevisto: 3.08, teorPbRealizado: 3.72 },
  { dayOfWeek: "Ter", date: "9-Dec", zincPrevisto: 148, zincRealizado: 145.93, chumboPrevisto: 30, chumboRealizado: 35.59, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: 14.74, teorPbPrevisto: 3.08, teorPbRealizado: 4.18 },
  { dayOfWeek: "Qua", date: "10-Dec", zincPrevisto: 148, zincRealizado: 137.44, chumboPrevisto: 30, chumboRealizado: 23.25, desenvolvPrevisto: 3.5, desenvolvRealizado: 3.50, teorZnPrevisto: 14.30, teorZnRealizado: 14.63, teorPbPrevisto: 3.08, teorPbRealizado: 3.13 },
  { dayOfWeek: "Qui", date: "11-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Sex", date: "12-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Sáb", date: "13-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Dom", date: "14-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Seg", date: "15-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Ter", date: "16-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Qua", date: "17-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Qui", date: "18-Dec", zincPrevisto: 63, zincRealizado: null, chumboPrevisto: 13, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Sex", date: "19-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Sáb", date: "20-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Dom", date: "21-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Seg", date: "22-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Ter", date: "23-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Qua", date: "24-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Qui", date: "25-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Sex", date: "26-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Sáb", date: "27-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Dom", date: "28-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Seg", date: "29-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Ter", date: "30-Dec", zincPrevisto: 148, zincRealizado: null, chumboPrevisto: 30, chumboRealizado: null, desenvolvPrevisto: null, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
  { dayOfWeek: "Qua", date: "31-Dec", zincPrevisto: 145, zincRealizado: null, chumboPrevisto: 29, chumboRealizado: null, desenvolvPrevisto: 3.5, desenvolvRealizado: null, teorZnPrevisto: 14.30, teorZnRealizado: null, teorPbPrevisto: 3.08, teorPbRealizado: null },
];

export const monthlyTotals = {
  zincPrevisto: 4500,
  zincRealizado: 1469.04,
  chumboPrevisto: 912,
  chumboRealizado: 306.41,
  desenvolvPrevisto: 38.5,
  desenvolvRealizado: 17.5,
  teorZnPrevisto: 14.30,
  teorZnRealizado: 14.99,
  teorPbPrevisto: 3.08,
  teorPbRealizado: 3.59,
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
