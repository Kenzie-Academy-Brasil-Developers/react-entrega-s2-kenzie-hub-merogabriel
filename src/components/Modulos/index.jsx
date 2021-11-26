import { Container } from "./styles";

const Modulos = ({ error, register, name, ...rest }) => {
  return (
    <Container>
      <input
        type="radio"
        id="primeiro"
        name={name}
        value="Primeiro módulo (Introdução ao Frontend)"
        {...register(name)}
      />
      <label for="primeiro">Primeiro</label>
      <input
        type="radio"
        id="segundo"
        name={name}
        value="Segundo módulo (Frontend Avançado)"
        {...register(name)}
      />
      <label for="segundo">Segundo</label>
      <input
        type="radio"
        id="terceiro"
        name={name}
        value="Terceiro módulo (Introdução ao Backend)"
        {...register(name)}
      />
      <label for="terceiro">Terceiro</label>
      <input
        type="radio"
        id="quarto"
        name={name}
        value="Quarto módulo (Backend Avançado)"
        {...register(name)}
      />
      <label for="quarto">Quarto</label>
    </Container>
  );
};

export default Modulos;
