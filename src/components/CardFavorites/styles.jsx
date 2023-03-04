import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8125rem;
  width: 100%;
  > img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: contain;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.25rem;
    span {
      color: ${({ theme }) => theme.colors.gray_300};
      font-family: "Poppins";
      font-size: 1.25rem;
    }
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.red_300};
  background-color: transparent;
  font-family: "Roboto";
  font-size: 0.75rem;
  font-weight: 400;
  border: none;
  padding: 0;
`;
