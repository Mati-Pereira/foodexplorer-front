import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  > div {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.green_500};
    height: 3rem;
    padding: 0.24rem;
    input {
      width: 100%;
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
      padding: 0 1rem;
      font-size: 1rem;
      &::placeholder {
        color: ${({ theme }) => theme.colors.gray_600};
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray_400};
  font-family: "Roboto", sans-serif;
`;
