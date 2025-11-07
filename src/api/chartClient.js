import client from "./client";
import PATCHS from "./path";

export const getChartList = async (gender, config) => {
  const response = await client.get(`${PATCHS.charts}/${gender}`, config);
  return response;
};
