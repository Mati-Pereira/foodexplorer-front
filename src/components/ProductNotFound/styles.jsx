import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px dashed ${({ theme }) => theme.colors.gray_500};
  background-color: trasparent;
  border-radius: 0.5rem;
  width: 200px;
  height: 300px;
  > h3 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.gray_500};
    font-family: "Poppins", sans-serif;
  }
`;
