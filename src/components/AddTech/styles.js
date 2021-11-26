import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  @media (min-width: 767px) {
    width: 500px;
  }
`;

export const Escolhas = styled.div`
  display: flex;
  justify-content: space-around;
  input {
    display: none;
  }
  label {
    margin-bottom: 2rem;
    color: var(--blue);
    font-size: 14px;
  }

  input:checked + label {
    background-color: rgba(64, 60, 170, 0.1);
    border-radius: 6px;
    padding: 0.5rem 1rem;
  }
`;

export const Container = styled.form`
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  color: #333333;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background: #ffffff;
  max-width: 90vw;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.25);

  button {
    background: var(--blue);
    color: #ffffff;
    font-size: 16px;
    width: 80%;
    align-self: center;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--lightgrey);
    padding-bottom: 1rem;
  }

  span {
    font-size: 14px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 767px) {
    width: 500px;
    height: 304px;
  }
`;

export const OutX = styled.div``;
