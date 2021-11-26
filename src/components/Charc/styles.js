import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  background-color: var(--lightgrey);
  width: 90vw;
  @media (min-width: 1023px) {
    width: 25vw;
    margin-top: 2rem;
  }
`;

export const Head = styled.div`
  display: flex;
  background-color: var(--blue);
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
`;

export const Sub = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const Name = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Modulo = styled.div`
  font-size: 12px;
  color: #ffffff;
`;

export const Main = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;

  button {
    width: 100%;
  }

  @media (min-width: 1023px) {
    border: 1px var(--lightgrey) solid;
  }
`;

export const Contato = styled.div`
  display: flex;
  background-color: rgba(64, 60, 170, 0.1);
  padding: 20px;
  margin-bottom: 1rem;

  p {
    font-size: 14px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    color: var(--mediumgrey);
  }

  @media (min-width: 1023px) {
    border-radius: 6px;
  }
`;

export const Email = styled.div`
  display: flex;
  padding: 20px;
  background-color: rgba(17, 153, 94, 0.1);
  margin-bottom: 1rem;
  p {
    font-size: 14px;
    font-weight: bold;
  }

  span {
    font-size: 12px;
    color: var(--mediumgrey);
  }
  @media (min-width: 1023px) {
    border-radius: 6px;
  }
`;

export const SubConta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: space-between;
`;

export const SubEmail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: space-between;
`;
