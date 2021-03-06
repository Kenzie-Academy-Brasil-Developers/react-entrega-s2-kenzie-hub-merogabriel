import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5;
  color: ${(props) => (props.blue ? "#ffffff" : "#999999")};
  border-radius: 8px;
  border: none;
  width: ${(props) => (props.login ? "78%" : "80%")};
  height: 57px;
  margin: 0px 20px;
  margin-top: 20px;
  color: var(--mediumgrey);
  @media (min-width: 769px) {
    width: 452px;
  }
`;
