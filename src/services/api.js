import axios from "axios";

const api = axios.create({
  baseURL: "https://servidor-cadastro-de-usuario-eta.vercel.app/"
})

export default api
