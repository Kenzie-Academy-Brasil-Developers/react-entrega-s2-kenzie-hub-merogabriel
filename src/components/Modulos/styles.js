import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  button {
    padding: 5px;
    background-color: rgba(64, 60, 170, 0.1);
    border: none;
    border-radius: 7px;
    color: var(--blue);
  }

  input {
    display: none;
  }

  label {
    color: var(--blue);
    padding: 7px;
    font-size: 0.8rem;
  }

  input:checked + label {
    background-color: rgba(64, 60, 170, 0.1);
    border-radius: 6px;
  }
`;
