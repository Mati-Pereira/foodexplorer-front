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
  flex-direction: column;
  flex: 1;
  width: 1000px;
  > h1 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray_300};
  }
  > table {
    width: 100%;
    border-spacing: 0;
    font-family: "Roboto";
    thead {
      color: ${({ theme }) => theme.colors.gray_300};
      font-weight: 700;
      tr:first-child {
        border-radius: 0.5rem 0 0 0;
      }
      tr:last-child {
        border-radius: 0 0.5rem 0 0;
      }
    }
    tbody {
      color: ${({ theme }) => theme.colors.gray_400};
      font-weight: 400;
    }

    td {
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.gray_500};
    }
    select {
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.white};
      padding: 10px 20px;
      width: 100%;
    }
    option {
      background-color: #192227;
      &:hover {
        background: white;
        color: black;
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    h1 {
      text-align: center;
    }
  }
`;
