import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: -50px;
`;

export const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid var(--lightgrey);
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  width: 90vw;
  height: 426px;
  margin-top: 50px;

  > p {
    font-size: 14px;
    text-align: center;
    color: var(--mediumgrey);
  }

  > span {
    color: var(--darkgrey);
    margin-top: -1rem;
  }

  @media (min-width: 769px) {
    width: 500px;
  }
`;
