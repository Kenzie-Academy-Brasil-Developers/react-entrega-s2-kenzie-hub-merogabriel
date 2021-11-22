import styled from "styled-components";

export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* opacity: ${(props) => (props.auth ? "0.5" : "1")}; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid var(--lightgrey);
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  > input:first-child {
    margin-top: 30px;
  }

  > button {
    margin-top: 20px;
    margin-bottom: 20px;
  }

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
