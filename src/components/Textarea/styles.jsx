import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  > textarea {
    font-family: "Roboto", sans-serif;
    resize: none;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.green_500};
    color: ${({ theme }) => theme.colors.white};
    &::placeholder {
      font-size: 1rem;
    }
  }
  > label {
    color: ${({ theme }) => theme.colors.gray_400};
    font-family: "Roboto", sans-serif;
  }
`;
