import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    svg {
      color: ${({ theme }) => theme.colors.label};
      padding: 0.75rem 0 0.75rem 0.875rem;
    }
    input {
      width: 100%;
      padding: 0.75rem 0.875rem;
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
      &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.label};
  font-family: "Roboto", sans-serif;
`;
