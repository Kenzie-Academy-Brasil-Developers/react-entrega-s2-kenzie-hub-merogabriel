import Button from "../Button";
import { Container, Head } from "./styles";
import { TextField } from "@material-ui/core";
import Xxx from "../Xxx";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const AddWork = ({ workAdd, setWorkAdd }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup.string("https://kenziehub.me"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function handleAddWork(data) {
    const authToken = localStorage.getItem("@kenziehub:token");
    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(setWorkAdd(false))
      .catch((err) => console.log(err));
  }

  return (
    <Container onSubmit={handleSubmit(handleAddWork)}>
      <Head>
        <p>Cadastrar Trabalho</p>
        <Xxx setWorkAdd={setWorkAdd} />
      </Head>

      <TextField
        name="title"
        label="Nome do Trabalho"
        type="text"
        {...register("title")}
      />

      <TextField
        name="description"
        label="Descricao do Trabalho"
        type="text"
        {...register("description")}
      />

      <TextField
        name="deploy_url"
        label="Url do deploy"
        type="text"
        value="https://kenziehub.me"
        {...register("deploy_url")}
      />

      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};

export default AddWork;
