import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => (props.blue ? "#ffffff" : "#999999")};
  border-radius: 8px;
  border: none;
  width: 80%;
  height: 60px;
  margin: 0px 20px;
  margin-top: 20px;
  color: var(--mediumgrey);
  @media (min-width: 769px) {
    width: 452px;
  }
`;

export const Escolhas = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: black;
    margin-bottom: 10px;
  }
`;
