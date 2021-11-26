import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1023px) {
    width: 28vw;
    border-radius: 5px;
    background-color: #ffffff;
    margin-top: 2rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 3vh;

  p {
    font-size: 22px;
    font-weight: bold;
  }

  button {
    background-color: var(--green);
    border: none;
    width: 2rem;
    height: 1.8rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1023px) {
    width: 100%;
  }
`;

export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 77px;
  background-color: rgba(17, 153, 94, 0.1);
  border-radius: 5px;
`;

export const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  p {
    margin-top: 0.3rem;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const Unidade = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 30px;
  width: 100%;
  border-right: 3px solid var(--lightgrey);
  margin-bottom: 1rem;
  @media (min-width: 1023px) {
    width: 80%;
    padding-right: 2rem;
  }
`;

export const Status = styled.div`
  display: flex;
  background-color: rgba(17, 153, 94, 0.1);
  border-radius: 8px;
  height: 30px;
  width: auto;
  padding: 0 7px;
  color: var(--green);
  justify-content: center;
  align-items: center;

  span {
    font-size: 12px;
  }
`;

export const TudoTech = styled.div`
  width: 100%;
  margin-left: 2rem;
`;
