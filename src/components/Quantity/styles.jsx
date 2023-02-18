import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 3;
  gap: 1rem;
  > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
`;
