import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  color: #333333;
  padding: 20px;
  background: var(--lightgrey);
  border: 1px solid #f5f5f5;
  margin-top: -50vh;
  background: #ffffff;

  button {
    background: var(--green);
    color: #ffffff;
  }

  p {
    font-size: 18px;
    margin-bottom: 70px;
    font-weight: bold;
  }

  h2,
  h3,
  h4 {
    text-align: center;
  }

  h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    margin-top: 1rem;
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;
