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
  width: 100%;
  margin: auto;
  > h1 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-weight: 500;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 3rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-grow: 3;
  > label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.gray_400};
    font-family: "Roboto", sans-serif;
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
