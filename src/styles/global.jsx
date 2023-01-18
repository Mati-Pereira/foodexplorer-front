import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
    body{
        background-color: ${({ theme }) => theme.colors.black};
    }
`;
