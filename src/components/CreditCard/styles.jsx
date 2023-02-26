import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  > div {
    text-align: left;
    label {
      width: 80%;
      margin: auto;
    }
    div {
      margin: auto;
      width: 80%;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SecondRow = styled.div`
  display: flex;
  width: 100%;
`;
