import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  > a {
    max-width: 62.5rem;
    margin: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 12;
  max-width: 1000px;
  margin: auto;
`;

export const FirstRow = styled.div``;
