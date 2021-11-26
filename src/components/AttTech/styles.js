import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  @media (min-width: 767px) {
    width: 500px;
    height: 304px;
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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button1 = styled.button`
  background-color: var(--green);
  cursor: pointer;
  color: #ffffff;
  width: 48%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border: none;

  span {
    font-size: 12px;
    border: none;
  }
  @media (min-width: 767px) {
    width: 225px;
    height: 60px;

    span {
      font-size: 16px;
    }
  }
`;

export const Button2 = styled.button`
  cursor: pointer;
  background-color: var(--lightgrey);
  border-radius: 8px;
  width: 48%;
  color: var(--mediumgrey);
  height: 2rem;
  border: none;
  span {
    font-size: 12 px;
    border: none;
  }
  @media (min-width: 767px) {
    width: 225px;
    height: 60px;

    span {
      font-size: 16px;
    }
  }
`;
