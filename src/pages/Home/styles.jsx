import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.green_900};
  padding: 10rem 0 3rem 0;
  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;

export const Background = styled.div`
  width: 70rem;
  height: 16.25rem;
  margin: auto;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 0.5rem;
  display: flex;
  > img {
    display: flex;
    object-fit: contain;
    margin-top: -6.25rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: auto;
    > img {
      display: none;
      width: 10rem;
      width: 80%;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  color: ${({ theme }) => theme.colors.white};
  gap: 0.5rem;
  > h1 {
    font-size: 2.5rem;
    font-weight: 500;
    height: 0;
  }
  > h5 {
    font-size: 1rem;
    font-weight: 400;
    height: 1;
    letter-spacing: -1px;
  }
  @media screen and (max-width: 768px) {
    > h1 {
      font-size: 1rem;
    }
    > h5 {
      font-size: 0.75rem;
    }
  }
`;
