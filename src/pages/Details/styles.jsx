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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    > img {
      width: 80%;
      height: 80%;
    }
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
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray_300};
    margin-bottom: 2rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const AddProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
  > div {
    padding: 0 3rem;
    button {
      max-width: 100px;
    }
  }
`;
