import styled from "styled-components";

interface IMenuBarStyled {
  opacity: number;
}
export const MenubarStyled = styled.section<IMenuBarStyled>`
  display: flex;
  width: auto;
  position: fixed;
  z-index: 20;
  top: 8px;
  transition: all 0.4s ease-in-out;
  opacity: ${(props) => props.opacity};
  @media (max-width: 590px) {
    top: 120px;
  }
`;
