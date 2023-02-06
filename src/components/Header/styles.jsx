import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_700};
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  gap: 2rem;
  > img {
    cursor: pointer;
  }
`;

export const Pedidos = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6875rem;
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem 5rem;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 0.5rem;
  width: 33%;

  > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }
  > input {
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_600};
    }
  }
`;
