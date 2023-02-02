import styled from "styled-components";

export const Container = styled.div`
  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray_300};
  }
`;
