import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.green_700};
  width: 100%;
  > span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    height: 2.5rem;
    gap: 2rem;
    > img {
      width: 20%;
    }
    > span {
      font-size: 0.75rem;
    }
  }
`;
