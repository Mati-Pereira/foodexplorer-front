import styled from "styled-components";

export const Container = styled.div`
  justify-items: center;
  text-align: center;
  max-width: 18.75rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem 2.875rem 1.5rem;
  position: relative;
  > svg {
    position: absolute;
    top: 1rem;
    right: 1.125rem;
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 1.25rem;
  }
`;

export const Image = styled.img`
  text-align: center;
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
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 400;
  font-family: "Roboto";
  font-size: 2rem;
  display: inline-block;
  margin: 0.9375rem auto;
`;

export const AddProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  > div {
    width: 50%;
  }
`;
