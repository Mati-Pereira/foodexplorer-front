import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.8125rem;
  padding: 0 5rem;
  background-color: ${({ theme }) => theme.colors.darkGreen};

  > span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;
