import styled from "styled-components";

export const MenubarStyled = styled.section`
  display: flex;
  width: auto;
  position: fixed;
  z-index: 30;
  height: 70px;
  top: 8px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 590px) {
    top: 120px;
  }
`;
