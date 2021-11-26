import {
  Container,
  Head,
  Name,
  Modulo,
  Main,
  Contato,
  Email,
  Sub,
  SubConta,
  SubEmail,
} from "./styles";
import Button from "../Button";
import { IconContext } from "react-icons";
import { AiOutlineUser, AiFillMail, AiFillContacts } from "react-icons/ai";

const Charc = ({ user, logout }) => {
  return (
    <Container>
      <Head>
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
            size: "2em",
          }}
        >
          <div>
            <AiOutlineUser></AiOutlineUser>
          </div>
        </IconContext.Provider>

        <Sub>
          <Name>{user.name}</Name>
          <Modulo>{user.course_module}</Modulo>
        </Sub>
      </Head>
      <Main>
        <Contato>
          <IconContext.Provider
            value={{
              color: "var(--blue)",
              className: "global-class-name",
              size: "2em",
            }}
          >
            <div>
              <AiFillContacts />
            </div>
          </IconContext.Provider>
          <SubConta>
            <p>Ligar agora</p>
            <span>{user.contact}</span>
          </SubConta>
        </Contato>
        <Email>
          <IconContext.Provider
            value={{
              color: "var(--green)",
              className: "global-class-name",
              size: "2em",
            }}
          >
            <div>
              <AiFillMail />
            </div>
          </IconContext.Provider>
          <SubEmail>
            <p>Enviar Email</p>
            <span>{user.email}</span>
          </SubEmail>
        </Email>
        <Button onClick={logout}>Sair</Button>
      </Main>
    </Container>
  );
};

export default Charc;
