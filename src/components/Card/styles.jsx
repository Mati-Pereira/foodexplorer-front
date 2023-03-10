import styled from "styled-components";

export const Container = styled.div`
  justify-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  padding: 1.5rem 2.875rem 2rem;
  max-width: 40rem;
  position: relative;
  > div {
    > a {
      svg:first-child {
        position: absolute;
        top: 1rem;
        right: 0;
        color: ${({ theme }) => theme.colors.gray_300};
        font-size: 1.5rem;
      }
    }
    svg:nth-child(2) {
      position: absolute;
      top: 3.5rem;
      right: 0;
      color: ${({ theme }) => theme.colors.gray_300};
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 10rem;
    margin: auto;
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
  gap: 1rem;
  > div {
    width: 50%;
  }
`;
