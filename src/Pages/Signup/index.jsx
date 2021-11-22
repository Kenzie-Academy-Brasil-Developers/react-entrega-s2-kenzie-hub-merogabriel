import "./styles.js";
import { useState } from "react";
import { SignupBox, Container } from "./styles.js";
import Sucesso from "../../components/Sucesso/index.jsx";
import Button from "../../components/Button";
import Title from "../../components/Title/";
import Input from "../../components/Input";

const Signup = () => {
  const [auth, setAuth] = useState(false);

  return (
    <SignupBox auth>
      {auth ? <Sucesso /> : null}
      <Title />
      <Container>
        <Input placeholder="Login"></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Bio"></Input>
        <Input placeholder="Contato"></Input>
        <Input placeholder="Selecionar"></Input>
        <Input placeholder="Senha"></Input>
        <Input placeholder="Confirmar Senha"></Input>
        <Button type="button" blue onClick={() => setAuth(!auth)}>
          Cadastrar
        </Button>
      </Container>
    </SignupBox>
  );
};

export default Signup;
