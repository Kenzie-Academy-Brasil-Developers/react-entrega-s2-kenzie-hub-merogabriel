import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: var(--lightgrey);
`;

export const Header = styled.div`
  width: 100vw;
  height: 80px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;

  @media (min-width: 1023px) {
    margin-top: 1rem;
    width: 90vw;
    align-self: center;
    border-radius: 8px;
  }

  h1 {
    font-size: 22px;
    margin-left: 1.3rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  @media (min-width: 1023px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export const Titulos = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Works = styled.div``;

export const Perfil = styled.div``;

export const Filter = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
