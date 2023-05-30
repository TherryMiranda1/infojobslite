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
  overflow-x: scroll;
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
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hover};
  }
`;

export const SelectionCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30vh;
  width: 90vw;
  max-width: 800px;
  height: 300px;
  z-index: 10;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.2rem;
  padding: 4px;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.inverse};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 20px;
  h3 {
    height: 100px;
  }
`;

export const CloseButon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.inverse};
`;

export const ItemsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;
