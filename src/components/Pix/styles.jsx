import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34rem;
  height: 28rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_500};
  border-radius: 0 0 0.5rem 0.5rem;
  @media screen and (max-width: 768px) {
    width: 99.5%;
  }
`;
