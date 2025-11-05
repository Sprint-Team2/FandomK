import axios from "axios";

const client = axios.create({
  timeout: 3000,
  baseURL: "https://fandom-k-api.vercel.app/20-2",
  headers: {
    "Content-Type": "application/json",
  },
});

export const Get = async (url, config) => {
  const response = await client.get(url, config);
  return response.data;
};

export const Post = async (url, data, config) => {
  const response = await client.post(url, data, config);

  return response.data;
};

export const Put = async (url, data, config) => {
  const response = await client.put(url, data, config);
  return response.data;
};

export const Patch = async (url, data, config) => {
  const response = await client.patch(url, data, config);

  return response.data;
};

export const Delete = async (url, data, config) => {
  const response = await client.delete(url, {
    ...config,
    data,
  });

  return response.data;
};

export default client;
