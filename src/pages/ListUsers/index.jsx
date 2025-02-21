import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useEffect } from "react";

function ListUsers() {
  useEffect(() => {
    async function getUsers() {
      const userFromApi = await api.get("/usuarios");
      console.log(userFromApi);
    }
    getUsers();
  }, []);

  return (
    <div>
      <TopBackground />
      <h1>Listagem de Usuário</h1>
      <Button>Voltar</Button>
    </div>
  );
}

export default ListUsers;
