import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
  }
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
`;
