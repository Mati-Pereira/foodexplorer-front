import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.color};
  color: ${({ theme }) => theme.colors.white};
  font-family: "Poppins";
  border-radius: 0.5rem;
  font-weight: 500;
  flex-grow: 1;
  font-size: 0.875rem;
  height: 3rem;
  cursor: pointer;
  border: none;
`;
