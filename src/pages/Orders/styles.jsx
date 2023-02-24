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
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  > div {
    h2 {
      color: ${({ theme }) => theme.colors.gray_300};
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
    }
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
  flex: 1;
`;
