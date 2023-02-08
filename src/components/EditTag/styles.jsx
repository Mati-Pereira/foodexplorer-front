import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray_500};
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  > svg {
    cursor: pointer;
  }
`;
