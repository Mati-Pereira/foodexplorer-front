import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  min-height: 100vh;
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div {
    width: 100%;
  }
`;
