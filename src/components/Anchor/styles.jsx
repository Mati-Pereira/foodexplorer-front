import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 0.875rem;
`;
