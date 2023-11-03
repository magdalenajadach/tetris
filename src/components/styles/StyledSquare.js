import styled from "styled-components";

export const StyledSquare = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-block-start-color: rgba(${(props) => props.color}, 1);
  border-block-end-color: rgba(${(props) => props.color}, 0.1);
  border-inline-start-color: rgba(${(props) => props.color}, 0.3);
  border-inline-end-color: rgba(${(props) => props.color}, 1);
`;
