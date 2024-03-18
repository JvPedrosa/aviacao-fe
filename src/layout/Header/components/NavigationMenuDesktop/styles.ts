import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;
