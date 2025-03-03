import axios from "axios";

const api = axios.create({
  baseURL: "https://servidor-cadastro-de-usuario.onrender.com"
})

export default api
