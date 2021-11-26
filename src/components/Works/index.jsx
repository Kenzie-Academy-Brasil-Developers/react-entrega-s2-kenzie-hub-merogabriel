import {
  WorkList,
  Container,
  Menu,
  Img,
  Legenda,
  Unidade,
  Status,
  TudoWork,
} from "./styles";
import { IoAdd } from "react-icons/io5";
import { SiProcesswire } from "react-icons/si";
import { IconContext } from "react-icons";

const Works = ({ user, setWorkAdd, setWorkAtt, setWorkId }) => {
  function getWork(id) {
    setWorkId(id);
    setWorkAtt(true);
  }
  
  return (
    <Container>
      <Menu>
        <p>Meus Trabalhos</p>
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
            size: "2em",
          }}
        >
          <div>
            <button>
              <IoAdd onClick={() => setWorkAdd(true)} />
            </button>
          </div>
        </IconContext.Provider>
      </Menu>

      <WorkList>
        {user.works ? (
          <TudoWork>
            {user.works.map((e) => (
              <Unidade key={e.id} onClick={() => getWork(e)}>
                <Img>
                  <IconContext.Provider
                    value={{
                      color: "var(--blue)",
                      className: "global-class-name",
                      size: "2em",
                    }}
                  >
                    <SiProcesswire />
                  </IconContext.Provider>
                </Img>
                <Legenda>
                  <p>{e.title}</p>
                  <Status>
                    <span>
                      {e.description.substring(0, 40)}
                      {e.description.length > 40 && "..."}
                    </span>
                  </Status>
                </Legenda>
              </Unidade>
            ))}
          </TudoWork>
        ) : null}
      </WorkList>
    </Container>
  );
};

export default Works;
