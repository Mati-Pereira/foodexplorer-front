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
  align-items: flex-start;
  justify-content: center;
  flex-grow: 10;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  > h1 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-weight: 500;
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    margin: 1rem 0;
  }
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
  gap: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_500};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
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
  gap: 4rem;
`;

export const ThirdRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 3rem;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 2rem;
  > div:last-child {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
