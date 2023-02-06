import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, change }) =>
    !change ? theme.colors.white : theme.colors.gray_500};
  background-color: ${({ theme, change }) =>
    !change ? theme.colors.gray_500 : "transparent"};
  border: ${({ theme, change }) =>
    !change ? "none" : `1px dashed ${theme.colors.gray_500}`};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;
