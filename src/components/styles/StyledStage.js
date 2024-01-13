import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(15vw / ${(props) => props.width})
  );
  grid-gap: 1px;
  border: 2px solid #edcbb1;
  width: 100%;
  max-width: 25vw;
  background: #929982;
`;
