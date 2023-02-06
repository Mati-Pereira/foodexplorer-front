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
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.green_500};
    color: ${({ theme }) => theme.colors.white};
  }
  > label {
    color: ${({ theme }) => theme.colors.gray_400};
    font-family: "Roboto", sans-serif;
  }
`;
