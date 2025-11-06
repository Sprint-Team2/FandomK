import { Get, Put } from "./client";
import PATCHS from "./path";

export const getDonationList = async (config) => {
  const response = await Get(PATCHS.donations, config);
  return response;
};

export const contributeDonation = async (id, data, config) => {
  const response = await Put(`${PATCHS.donations}/${id}/contribute`, data, config);
  return response;
};
