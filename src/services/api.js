import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://servidor-cadastro-de-usuario.onrender.com", // Fallback para desenvolvimento local
});

export default api;