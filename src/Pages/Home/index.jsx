import { Container, Header, Main, Filter } from "./styles";
import Title from "../../components/Title";
import Techs from "../../components/Techs";
import Works from "../../components/Works";
import Charc from "../../components/Charc";
import AddTech from "../../components/AddTech";
import AddWork from "../../components/AddWork";
import AttTech from "../../components/AttTech";
import AttWork from "../../components/AttWork";

import { useEffect, useState } from "react";
import { Redirect, useParams, useHistory } from "react-router";

import api from "../../services/api";

const Home = ({ auth, setUser, user, setAuth }) => {
  const { id } = useParams();
  const history = useHistory();

  const [techId, setTechId] = useState({});
  const [workId, setWorkId] = useState({});
  const [techAdd, setTechAdd] = useState(false);
  const [workAdd, setWorkAdd] = useState(false);
  const [techAtt, setTechAtt] = useState(false);
  const [workAtt, setWorkAtt] = useState(false);

  useEffect(() => {
    api.get(`/users/${id}`).then((response) => setUser(response.data));
  }, [user]);

  if (!auth) {
    return <Redirect to="/" />;
  }

  function logout() {
    localStorage.clear();
    setAuth(false);
    history.push("/");
  }

  return (
    <>
      {techAdd || workAdd || techAtt || workAtt ? (
        <Filter>
          {techAdd && (
            <>
              <AddTech techAdd={techAdd} setTechAdd={setTechAdd}></AddTech>
            </>
          )}
          {workAdd && (
            <>
              <AddWork workAdd={workAdd} setWorkAdd={setWorkAdd}></AddWork>
            </>
          )}
          {workAtt && (
            <>
              <AttWork
                workAtt={workAtt}
                setWorkAtt={setWorkAtt}
                workId={workId}
              ></AttWork>
            </>
          )}
          {techAtt && (
            <>
              <AttTech
                techAtt={techAtt}
                setTechAtt={setTechAtt}
                techId={techId}
              ></AttTech>
            </>
          )}
        </Filter>
      ) : null}

      <Container>
        <Header>
          <Title />
        </Header>
        <Main>
          <Techs
            user={user}
            techAdd={techAdd}
            setTechAdd={setTechAdd}
            setTechAtt={setTechAtt}
            setTechId={setTechId}
          ></Techs>
          <Works
            user={user}
            workAdd={workAdd}
            setWorkAdd={setWorkAdd}
            setWorkAtt={setWorkAtt}
            setWorkId={setWorkId}
          ></Works>
          <Charc user={user} logout={logout}></Charc>
        </Main>
      </Container>
    </>
  );
};

export default Home;
