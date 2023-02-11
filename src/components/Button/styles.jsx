import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  flex-grow: 1;
  height: 3rem;
  width: 100%;
  cursor: pointer;
  > button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-family: "Poppins";
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;
