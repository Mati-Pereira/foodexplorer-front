import styled from "styled-components";

export const Container = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33.9rem;
    margin: auto;
    gap: 2rem;
    padding: 4rem 0;
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
    border-radius: 0 0 0.5rem 0.5rem;
    div {
      text-align: left;
    }
    button {
      display: flex;
      gap: 0.5rem;
      width: 80%;
      padding: 2rem 0;
      margin-top: 1rem;
    }
  }
`;

export const SecondRow = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
`;
