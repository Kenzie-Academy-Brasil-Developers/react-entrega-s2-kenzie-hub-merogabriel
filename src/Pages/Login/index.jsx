import "./styles.js";
import { LoginBox, Container } from "./styles.js";
import Button from "../../components/Button";
import Title from "../../components/Title/";
import Input from "../../components/Input";

import * as yup from "yup";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
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
        setAuth(true);
        history.push(`/users/${user.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Title />
      <LoginBox onSubmit={handleSubmit(handleSignIn)}>
        <Input
          login
          name="email"
          label="Login"
          type="text"
          register={register}
          error={errors.email?.message}
        />
        <Input
          login
          name="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <Button blue type="submit">
          Logar
        </Button>
        <p>Criar uma Página para mostar suas</p>
        <span> habilidades metas e progresso</span>
        <Button onClick={() => history.push("/signup")}>Cadastrar</Button>
      </LoginBox>
    </Container>
  );
};

export default Login;
