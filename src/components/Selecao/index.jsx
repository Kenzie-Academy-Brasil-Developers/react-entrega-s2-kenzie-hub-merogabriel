import { Container, Escolhas } from "./styles";

import Modulos from "../Modulos";

const Selecao = ({ name, register, label, error, ...rest }) => {
  return (
    <Container>
      <Escolhas isErrored={!!error}>
        <p>Selecionar Modulo:</p>
        <Modulos name={name} register={register} error={error} />
      </Escolhas>
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Selecao;
