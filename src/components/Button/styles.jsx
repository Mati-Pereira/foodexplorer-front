import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  height: 3rem;
  cursor: pointer;
  transition: 0.25s ease-in-out all;
  &:active {
    transform: scale(0.98);
  }
  > button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Poppins";
    font-weight: 500;
    font-size: 0.875rem;
  }
`;
