import { Redirect } from "react-router";
import Title from "../../components/Title";
import { Container, Header, Main, Perfil, Techs, Works } from "./styles";

const Home = ({ auth, user }) => {
  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header>
        <Title />
      </Header>
      <Main>
        <Techs></Techs>
        <Works></Works>
        <Perfil></Perfil>
      </Main>
    </Container>
  );
};

export default Home;
