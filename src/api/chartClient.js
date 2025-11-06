import { Get, Put } from "./client";
import PATCHS from "./path";

export const getChartList = async (gender, config) => {
  const response = await Get(`${PATCHS.charts}/${gender}`, config);
  return response;
};
