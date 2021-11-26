import "./styles.js";
import { useState, useEffect } from "react";
import { SignupBox, Container } from "./styles.js";
import Sucesso from "../../components/Sucesso/index.jsx";
import Button from "../../components/Button";
import Title from "../../components/Title/";
import { Filter } from "./styles.js";
import Input from "../../components/Input";
import Selecao from "../../components/Selecao";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const Signup = ({ auth, setAuth }) => {
  useEffect(() => {
    setAuth(false);
  }, []);

  const [user, setUser] = useState({});
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minímo 6 digítos")
      .required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        setUser(response.data);
        setAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container auth>
      {auth ? (
        <>
          <Sucesso user={user} setAuth={setAuth} /> <Filter />
        </>
      ) : null}
      <Title />
      <SignupBox onSubmit={handleSubmit(handleSignUp)}>
        <Input
          name="name"
          label="Nome"
          register={register}
          error={errors.name?.message}
        />
        <Input
          name="email"
          label="Email"
          register={register}
          error={errors.email?.message}
        />
        <Input
          name="bio"
          label="Bio"
          register={register}
          error={errors.bio?.message}
        />
        <Input
          name="contact"
          label="Contato"
          register={register}
          error={errors.contact?.message}
        />
        <Selecao
          name="course_module"
          label="Selecionar Modulo"
          register={register}
          error={errors.course_module?.message}
        />
        <Input
          name="password"
          type="password"
          label="Senha"
          register={register}
          error={errors.password?.message}
        />
        <Input
          name="confirm_password"
          type="password"
          label="Confirmar Senha"
          register={register}
          error={errors.confirm_password?.message}
        />
        <Button type="submit" blue>
          Cadastrar
        </Button>
      </SignupBox>
    </Container>
  );
};

export default Signup;
