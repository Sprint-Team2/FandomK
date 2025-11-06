import { Get } from "./client";
import PATCHS from "./path";

export const getIdolList = async (config) => {
  const response = await Get(PATCHS.idols, config);
  return response;
};
