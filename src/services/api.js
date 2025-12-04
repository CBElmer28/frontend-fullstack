// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    
    // --- DIAGNÓSTICO ---
    console.log(`[REQUEST] ${config.method.toUpperCase()} ${config.url}`);
    if (token) {
        console.log("✅ Token encontrado en localStorage:", token.substring(0, 15) + "...");
        config.headers.Authorization = `Bearer ${token}`;
        console.log("🔹 Headers finales:", config.headers);
    } else {
        console.warn("⚠️ ALERTA: No hay token en localStorage. Se envía como anónimo.");
    }
    // -------------------

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;