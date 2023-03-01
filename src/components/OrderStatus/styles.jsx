import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_300};
`;
