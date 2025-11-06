import { Get, Put } from "./client";
import PATCHS from "./path";

export const getChartList = async (config) => {
  const response = await Get(PATCHS.charts, config);
  return response;
};
