import { Container, Head, Buttons, Button1, Button2 } from "./styles";
import { TextField } from "@material-ui/core";
import Xxx from "../Xxx";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api.js";

const AttWork = ({ setWorkAtt, workId }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleAttWork(data) {
    const authToken = localStorage.getItem("@kenziehub:token");
    api
      .put(`/users/works/${workId.id}`, data, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(setWorkAtt(false))
      .catch((err) => console.log(err));
  }

  function deleteWork() {
    const authToken = localStorage.getItem("@kenziehub:token");
    api
      .delete(`/users/works/${workId.id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(setWorkAtt(false))
      .catch((err) => console.log(err));
  }

  return (
    <Container onSubmit={handleSubmit(handleAttWork)}>
      <Head>
        <p>Atualizar Trabalho</p>
        <Xxx setWorkAtt={setWorkAtt} />
      </Head>

      <TextField
        name="title"
        value={workId.title}
        type="text"
        {...register("title")}
        error={errors.title?.message}
      />

      <TextField
        name="description"
        label="Descricao do Trabalho"
        type="text"
        {...register("description")}
        error={errors.description?.message}
      />

      <Buttons>
        <Button1 type="submit">
          <span>Salvar Alterações</span>
        </Button1>
        <Button2 onClick={() => deleteWork()}>
          <span>Excluir</span>
        </Button2>
      </Buttons>
    </Container>
  );
};

export default AttWork;
