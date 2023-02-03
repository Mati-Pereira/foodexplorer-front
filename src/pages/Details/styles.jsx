import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  > a {
    max-width: 62.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 10;
  width: 100%;
  max-width: 62.5rem;
  font-family: "Poppins", sans-serif;
  gap: 3rem;
  > img {
    width: 25rem;
    height: 25rem;
    object-fit: contain;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 2.5rem;
  }
  > p {
    font-weight: 400;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;

export const Tags = styled.div``;
