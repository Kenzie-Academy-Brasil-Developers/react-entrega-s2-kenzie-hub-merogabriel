import styled from "styled-components";

export const Container = styled.h1`
  display: flex;
  flex-flow: row nowrap;
  font-size: 28px;
  font-weight: bold;
  width: 150px;
  height: 37.84;

  > p {
    font-size: 18px;
    font-weight: normal;
    margin-left: 0.5rem;
    background: var(--blue);
    color: #ffffff;
    padding: 2px;
    border-radius: 5px;
  }
`;
