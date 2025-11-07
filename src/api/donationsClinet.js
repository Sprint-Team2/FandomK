import client from "./client";
import PATCHS from "./path";

export const getDonationList = async (config) => {
  const response = await client.get(PATCHS.donations, config);
  return response;
};

export const contributeDonation = async (id, data, config) => {
  const response = await client.put(`${PATCHS.donations}/${id}/contribute`, data, config);
  return response;
};
