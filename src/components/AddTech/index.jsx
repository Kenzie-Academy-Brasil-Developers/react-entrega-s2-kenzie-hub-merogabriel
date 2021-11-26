import Button from "../Button";
import { Container, Escolhas, Head, OutX } from "./styles";
import { TextField } from "@material-ui/core";
import Xxx from "../Xxx";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const AddTech = ({ techAdd, setTechAdd }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleAddTech(data) {
    const authToken = localStorage.getItem("@kenziehub:token");
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(setTechAdd(false))
      .catch((err) => console.log(err));
  }

  return (
    <Container onSubmit={handleSubmit(handleAddTech)}>
      <Head>
        <p>Cadastrar Tecnologia</p>
        <OutX>
          <Xxx setTechAdd={setTechAdd} />
        </OutX>
      </Head>

      <TextField
        name="title"
        label="Nome da Tech"
        type="text"
        {...register("title")}
        error={errors.title?.message}
      />
      <span>Selecionar status:</span>
      <Escolhas>
        <input
          type="radio"
          id="iniciante"
          name="status"
          value="Iniciante"
          {...register("status")}
        />
        <label for="iniciante">Iniciante</label>
        <input
          type="radio"
          id="intermediario"
          name="status"
          value="Intermediario"
          {...register("status")}
        />
        <label for="intermediario">Intermediário</label>
        <input
          type="radio"
          id="avancado"
          name="status"
          value="Avancado"
          {...register("status")}
        />
        <label for="avancado">Avançado</label>
      </Escolhas>
      <Button type="submit">Cadastrar</Button>
    </Container>
  );
};

export default AddTech;
