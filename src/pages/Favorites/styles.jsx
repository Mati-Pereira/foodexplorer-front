import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  > h1 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-family: "Poppins";
    font-size: 2rem;
    font-weight: 500;
    padding: 1rem 0;
  }
  @media (max-width: 768px) {
    > h1 {
      text-align: center;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  border: 3px solid red;
  > div {
    width: fit-content;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    align-self: flex-start;
    padding: 1rem 3rem;
    column-gap: 2rem;
  }
`;
