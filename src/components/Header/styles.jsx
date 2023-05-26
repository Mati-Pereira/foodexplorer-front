import styled from "styled-components";

export const Container = styled.header`
  display: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_700};
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  gap: 1.5rem;
  > img {
    cursor: pointer;
  }
  > div {
    span {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 0.75rem;
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.colors.blue};
      margin-top: -5px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Pedidos = styled.div`
  background-color: ${({ theme }) => theme.colors.red_500};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6875rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  max-width: 12rem;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    > span {
      display: none;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 0.5rem;
  > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
  }
  > input {
    display: flex;
    flex: 1;
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

export const MenuMobile = styled.section`
  display: none;
  margin: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green_700};
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
  }
  > img {
    cursor: pointer;
    margin: 0 auto 0 25%;
  }
  > svg {
    position: absolute;
    left: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    cursor: pointer;
  }
  > a {
    position: relative;
    > span {
      display: inline-block;
      position: absolute;
      top: 0.1rem;
      right: 1.5rem;
      background-color: ${({ theme }) => theme.colors.red_500};
      padding: 0 0.3rem;
      border-radius: 999px;
    }
  }
`;

export const MenuDropdown = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.green_700};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 4rem;
  justify-content: center;
  z-index: 5;
  gap: 2rem;
  overflow-x: hidden;

  > a {
    position: relative;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_600};
  }
  > div {
    width: 60%;
  }
  > span {
    display: flex;
    font-family: "Poppins";
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    svg {
      cursor: pointer;
    }
  }
`;
