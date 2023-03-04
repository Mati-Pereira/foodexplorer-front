import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.gray_700};
  width: 80%;
  margin: 0 auto;
  border-radius: 0.5rem;
  gap: 1rem;
  font-family: "Roboto";
  font-size: 0.875rem;
  font-weight: 400;
`;

export const First = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.gray_400};
  line-height: 1.5;
`;
