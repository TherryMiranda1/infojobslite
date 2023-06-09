import styled from "styled-components";

export const InputTextContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: relative;
`;

export const InputTextStyled = styled.input`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.secondary};
  outline: none;
  border: none;
  border-radius: 25px;
  font-size: 0.88rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-family: inherit;
  border: ${({ theme: { colors } }) => `1px solid ${colors.borders}`};
`;

export const ButtonSearchStyled = styled.button`
  position: absolute;
  right: 4px;
  top: 6px;
  border: none;
  width: 32px;
  aspect-ratio: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors } }) => colors.secondary};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
