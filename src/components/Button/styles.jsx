import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  background-color: ${(props) => props.color};
  color: ${({ theme }) => theme.colors.white};
  font-family: "Poppins";
  border-radius: 0.5rem;
  font-weight: 500;
  flex-grow: 1;
  font-size: 1rem;
  height: 3rem;
  cursor: pointer;
  border: none;
  white-space: nowrap;
`;
