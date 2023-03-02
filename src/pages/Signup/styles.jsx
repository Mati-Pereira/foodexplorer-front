import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    padding: 2rem 0;
    img {
      width: 70%;
    }
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.green_700};
  padding: 4rem;
  border-radius: 0.5rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > h1 {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Poppins";
  }
  > a {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 17rem;
    padding: 1rem;
    background-color: transparent;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div {
    width: 100%;
  }
`;
