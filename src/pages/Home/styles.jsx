import styled from "styled-components";

export const Container = styled.div`
  margin-top: 200px;
`;

export const Background = styled.div`
  width: 70rem;
  height: 16.25rem;
  margin: auto;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 0.5rem;
  display: flex;
  flex-grow: 0;
  > img {
    display: flex;
    margin-top: -7.5rem;
    height: 150%;
    width: 60%;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
