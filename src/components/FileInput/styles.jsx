import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray_400};
  font-weight: 400;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green_500};
  font-family: "Poppins", sans-serif;
  border-radius: 0.5rem;
  > label {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    input {
      display: none;
      cursor: pointer;
      opacity: 0;
      position: absolute;
      z-index: -1;
    }
    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }
    font-weight: 500;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    white-space: nowrap;
    padding: 0.75rem 2rem;
  }
`;
