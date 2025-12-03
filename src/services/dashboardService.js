import api from "./api"; 

export const getStats = async () => {
  const res = await api.get("/stats"); 
  return res.data;
};

export const getActivities = async () => {
  const res = await api.get("/activities");
  return res.data;
};