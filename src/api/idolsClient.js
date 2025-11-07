import client from "./client";
import PATCHS from "./path";

export const getIdolList = async (config) => {
  const response = await client.get(PATCHS.idols, config);
  return response;
};
