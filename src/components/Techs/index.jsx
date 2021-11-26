import {
  TechList,
  Container,
  Menu,
  Img,
  Legenda,
  Unidade,
  Status,
  TudoTech,
} from "./styles";
import { IoAdd } from "react-icons/io5";
import { SiNintendogamecube } from "react-icons/si";
import { IconContext } from "react-icons";

const Techs = ({ user, setTechAdd, setTechAtt, setTechId }) => {
  function getTech(id) {
    setTechId(id);
    setTechAtt(true);
  }

  return (
    <Container>
      <Menu>
        <p>Minhas Tecnologias</p>
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
            size: "2em",
          }}
        >
          <div>
            <button>
              <IoAdd onClick={() => setTechAdd(true)} />
            </button>
          </div>
        </IconContext.Provider>
      </Menu>

      <TechList>
        {user.techs ? (
          <TudoTech>
            {user.techs.map((e) => (
              <Unidade key={e.id} onClick={() => getTech(e)}>
                <Img>
                  <IconContext.Provider
                    value={{
                      color: "var(--green)",
                      className: "global-class-name",
                      size: "2em",
                    }}
                  >
                    <SiNintendogamecube />
                  </IconContext.Provider>
                </Img>
                <Legenda>
                  <p>{e.title}</p>
                  <Status>
                    <span>{e.status}</span>
                  </Status>
                </Legenda>
              </Unidade>
            ))}
          </TudoTech>
        ) : null}
      </TechList>
    </Container>
  );
};

export default Techs;
