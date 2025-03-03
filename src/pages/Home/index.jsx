import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    try {
      // Validar os campos antes de enviar
      if (
        !inputName.current.value ||
        !inputAge.current.value ||
        !inputEmail.current.value
      ) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      await api.post("/usuarios", {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value,
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/Lista-de-Usuários"); // Redireciona para a lista após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      if (error.response) {
        alert(
          `Erro ao cadastrar: ${
            error.response.data.error || "Erro no servidor"
          }`
        );
      } else if (error.request) {
        alert("Erro de rede: Não foi possível conectar ao servidor.");
      } else {
        alert("Erro ao cadastrar usuário. Tente novamente.");
      }
    }
  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInput>
        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do Usuário"
            ref={inputEmail}
          />
        </div>
        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>
      <Button type="button" onClick={() => navigate("/Lista-de-Usuários")}>
        Ver Lista de Usuários
      </Button>
    </Container>
  );
}

export default Home;
