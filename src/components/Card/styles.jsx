import styled from "styled-components";

export const Container = styled.div`
  max-width: 18.75rem;
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  width: 10.25rem;
  height: 10.25rem;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: "Poppins";
`;
export const Text = styled.p`
  font-weight: 400;
  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray_500};
`;
export const Price = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 400;
  font-family: "Roboto";
  font-size: 2rem;
`;
