import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray_300};
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  border-radius: 0.5rem;
`;
