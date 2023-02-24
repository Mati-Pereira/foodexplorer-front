import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.8125rem;
  > img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: contain;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  > button {
    width: fit-content;
    background-color: transparent;
    border: transparent;
    color: ${({ theme }) => theme.colors.red_300};
    padding: 0;
    cursor: pointer;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.gray_300};
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.25rem;
  > span {
    font-size: 0.75rem;
  }
`;
