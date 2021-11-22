import { Container } from "./styles";

const Input = ({ children, label, name, error, register, ...rest }) => {
  return (
    <Container>
      <div isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </div>
      {error && <span>{error} </span>}
    </Container>
  );
};

export default Input;
