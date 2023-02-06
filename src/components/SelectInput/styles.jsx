import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: start;
  gap: 1rem;
`;

export const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray_400};
  font-weight: 400;
`;

export const Select = styled.select`
  border: none;
  border-radius: 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green_300};
  color: ${({ theme }) => theme.colors.gray_600};
  width: 200px;
  padding: 1rem;
  font-size: 1rem;
  border: unset;
  appearance: none;
  background-image: url("/arrowdown.svg");
  background-repeat: no-repeat;
  background-position: right 1rem top 50%;
  background-size: 1rem auto;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_400};
  }
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.colors.green_300};
  color: ${({ theme }) => theme.colors.white};
`;
7;
