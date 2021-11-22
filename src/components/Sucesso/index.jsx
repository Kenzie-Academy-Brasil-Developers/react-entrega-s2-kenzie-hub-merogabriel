import { Container } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router";

const Sucesso = () => {
  const history = useHistory();

  return (
    <Container>
      <p>Sucesso</p>
      <h2>Yeesss!</h2>
      <h3>Tudo certinho, seu cadastro deu bom demais</h3>
      <h4>Agora basta fazer seu login e começar sua jornada...</h4>
      <Button onClick={() => history.push("/home")}>Ir para login</Button>
    </Container>
  );
};

export default Sucesso;
