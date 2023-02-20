import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > img {
    width: 4.5rem;
    height: 4.5rem;
    object-fit: contain;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span {
      color: ${({ theme }) => theme.colors.gray_300};
      font-family: "Poppins";
      font-size: 1.25rem;
    }
    a {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;
