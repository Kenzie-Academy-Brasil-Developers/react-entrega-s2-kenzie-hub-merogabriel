import styled from "styled-components";

export const Container = styled.input`
  background: #f5f5f5;
  color: ${(props) => (props.blue ? "#ffffff" : "#999999")};
  border-radius: 8px;
  border: none;
  width: ${(props) => (props.login ? "356px" : "348px")};
  height: 60px;
  margin: 0px 20px;
  margin-top: 20px;
  color: var(--mediumgrey);
  @media (min-width: 769px) {
    width: 452px;
  }
`;
