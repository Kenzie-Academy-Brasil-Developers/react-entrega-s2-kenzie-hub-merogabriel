import { Container, Escolhas, Head, Buttons, Button1, Button2 } from "./styles";
import { TextField } from "@material-ui/core";
import Xxx from "../Xxx";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const AttTech = ({ setTechAtt, techId }) => {
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

  function handleAttTech(data) {
    const authToken = localStorage.getItem("@kenziehub:token");
    api
      .put(`/users/techs/${techId.id}`, data, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(setTechAtt(false))
      .catch((err) => console.log(err));
  }

  function deleteTech() {
    const authToken = localStorage.getItem("@kenziehub:token");
    api
      .delete(`/users/techs/${techId.id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(setTechAtt(false))
      .catch((err) => console.log(err));
  }

  return (
    <Container onSubmit={handleSubmit(handleAttTech)}>
      <Head>
        <p>Atualizar Tecnologia</p>

        <Xxx setTechAtt={setTechAtt} />
      </Head>

      <TextField
        name="title"
        type="text"
        value={techId.title}
        {...register("title")}
        error={errors.title?.message}
      ></TextField>
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
      <Buttons>
        <Button1 type="submit">
          <span>Salvar Alterações</span>
        </Button1>
        <Button2 onClick={() => deleteTech()}>
          <span>Excluir</span>
        </Button2>
      </Buttons>
    </Container>
  );
};

export default AttTech;
