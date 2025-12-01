import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/dashboard`;

export const getStats = async () => {
  const res = await axios.get(`${API_URL}/stats`);
  return res.data;
};

export const getActivities = async () => {
  const res = await axios.get(`${API_URL}/activities`);
  return res.data;
};
