import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  min-width: 70rem;
  margin: auto;
  flex: 1;
  > div {
    h2 {
      color: ${({ theme }) => theme.colors.gray_300};
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    min-width: 80%;
    flex-direction: column;
  }
`;

export const Pedidos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  > h3 {
    color: ${({ theme }) => theme.colors.gray_300};
    font-family: "Poppins";
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const Pagamentos = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 34rem;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const PagamentoHeader = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  > button:first-child {
    border-radius: 0.5rem 0 0 0;
  }
  > button:last-child {
    border-radius: 0 0.5rem 0 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.green_800};
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  cursor: pointer;
  &:focus {
    outline: transparent;
    background-color: ${({ theme }) => theme.colors.green_500};
  }
`;
