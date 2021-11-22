import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../services/api";

const Techs = ({ name }) => {
  //   const [techs, setTechs] = useState([]);
  //   const [works, setWorks] = useState([]);
  //   const [user, setUser] = useState({});
  //   const { id } = useParams();

  //   useEffect(() => {
  //     api.get(`/${id}`).then((response) => console.log(response));
  //   });

  return (
    <div>
      oi
      {/* <div>
        {name === "Tecnologias" ? (
          <h2>Minhas Tecnologias</h2>
        ) : (
          <h2>Meus Trabalhos</h2>
        )}
        <button>Mais</button>
      </div> */}
    </div>
  );
};

export default Techs;
