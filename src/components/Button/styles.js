import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.blue ? "#403CAA" : "#F5F5F5")};
  color: ${(props) => (props.blue ? "#ffffff" : "#999999")};
  border-radius: 8px;
  border: none;
  width: 80%;
  height: 60px;
  font-size: 16px;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    width: 452px;
  }
`;
