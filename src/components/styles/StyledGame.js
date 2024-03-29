import styled from "styled-components";

export const StyledGameWraper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b7245c;
  overflow: hidden;
`;
export const StyledGame = styled.div`
  display: flex;
  align-items: flex-start;
  padding-block: 2.5rem;
  padding-inline: 2.5rem;
  margin-inline: auto;
  margin-block: 0;
  max-width: 30vw;

  aside {
    width: 100%;
    display: block;
    padding-block: 0;
    padding-inline: 1.25rem;
  }
`;
