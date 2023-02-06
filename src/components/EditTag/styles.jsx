import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  color: ${({ theme, edit }) =>
    !edit ? theme.colors.white : theme.colors.gray_500};
  background-color: ${({ theme, edit }) =>
    !edit ? theme.colors.gray_500 : "trasparent"};
  border: ${({ theme, edit }) =>
    !edit ? "none" : `1px dashed ${theme.colors.gray_500}`};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
`;
