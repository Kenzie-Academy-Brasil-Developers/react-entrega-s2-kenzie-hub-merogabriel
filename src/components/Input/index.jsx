import { Container } from "./styles";
import { TextField } from "@material-ui/core";

const Input = ({ name, error, register, label, ...rest }) => {
  return (
    <Container>
      <div isErrored={!!error}>
        <TextField
          fullWidth
          id={name}
          variant="outlined"
          label={label}
          {...register(name)}
          {...rest}
        />
      </div>
      {error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
