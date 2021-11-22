import "./styles.js";
import { LoginBox, Container } from "./styles.js";
import Button from "../../components/Button";
import Title from "../../components/Title/";
import Input from "../../components/Input";
import { useHistory, Redirect } from "react-router";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const Login = (auth, setAuth) => {
  const schema = yup.object().shape({
    login: yup.string().email("Email inválido").required("Campo obrigatório"),
    senha: yup
      .string()
      .min(6, "Minímo 6 digítos")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@kenziehub:token", token);
        localStorage.setItem("@kenziehub:user", JSON.stringify(user));
        history.push(`/${user.id}`);
        setAuth(true);
      })
      .catch((err) => console.log(err));
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginBox>
      <Title />
      <Container onSubmit={handleSubmit(handleSignIn)}>
        <Input
          login
          label="Login"
          name="login"
          register={register}
          error={errors.name?.message}
          placeholder="Login"
        ></Input>
        <Input
          login
          label="Senha"
          type="password"
          name="senha"
          error={errors.senha?.message}
          placeholder="Senha"
        ></Input>
        <Button blue type="submit">
          Logar
        </Button>
        <p>Criar uma Página para mostar suas</p>
        <span> habilidades metas e progresso</span>
        <Button onClick={() => history.push("/signup")}>Cadastrar</Button>
      </Container>
    </LoginBox>
  );
};

export default Login;
