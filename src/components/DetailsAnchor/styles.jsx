import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  flex-grow: 1;
  width: 100%;
  text-decoration: none;
  > svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }
  > span {
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;
