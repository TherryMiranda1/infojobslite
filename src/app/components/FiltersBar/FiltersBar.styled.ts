import { styled } from "styled-components";

export const FiltersContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FiltersBarStyled = styled.section`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.2rem;
  padding: 0.4rem;
  margin: 0;
  overflow-x: auto;
  color: ${({ theme: { colors } }) => colors.inverse};
`;

export const FilterCardStyled = styled.section`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.2rem;
  padding: 4px;
  color: ${({ theme: { colors } }) => colors.inverse};
`;

export const ButtonStyled = styled.button`
  font-size: 12px;
  font-family: inherit;
  padding: 6px;
  border-radius: 20px;

  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.secondary};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hover};
    scale: 1.05;
  }
`;
export const ButtonStyledDark = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: inherit;
  padding: 6px;
  height: 30px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  color: ${({ theme: { colors } }) => colors.primary};
  &:hover {
    scale: 1.05;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const BackdropStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 40;
  align-items: center;
  backdrop-filter: blur(10px);
`;

export const SelectionCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25vh;
  width: 70vw;
  max-width: 800px;
  min-height: 250px;
  max-height: 60vh;
  padding: 12px;
  z-index: 10;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.6rem;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.inverse};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 32px;
  @media (max-width: 590px) {
    width: 85vw;
  }
`;

export const ItemsContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.inverse};
`;

export const RemoveButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.primary};
`;
