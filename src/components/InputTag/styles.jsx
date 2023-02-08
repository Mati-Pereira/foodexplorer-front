import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: ${({ theme }) => `1px dashed ${theme.colors.gray_500}`};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  > input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    width: 4.5rem;
  }
  > svg {
    cursor: pointer;
  }
`;
