import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50%;
  height: 4.8125rem;
  background-color: ${({ theme }) => theme.colors.green_700};
  width: 100%;
  > span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;
