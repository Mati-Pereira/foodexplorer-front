import { Link } from "react-router-dom";

import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6875rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.75rem 2rem;
`;
