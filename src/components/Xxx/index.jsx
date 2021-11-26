import { AiOutlineClose } from "react-icons/ai";

const Xxx = ({ setTechAdd, setWorkAdd, setWorkAtt, setTechAtt }) => {
  function update() {
    setTechAdd && setTechAdd(false);
    setWorkAdd && setWorkAdd(false);
    setWorkAtt && setWorkAtt(false);
    setTechAtt && setTechAtt(false);
  }
  return <AiOutlineClose onClick={update}></AiOutlineClose>;
};

export default Xxx;
