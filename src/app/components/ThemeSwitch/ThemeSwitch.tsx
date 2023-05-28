import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styled from "styled-components";
import { darken } from "polished";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SwitchInput = styled.input`
  appearance: none;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: transform 0.3s ease;
    background-color: ${({ theme }) => theme.switchHandleColor};
    transform: ${({ theme }) =>
      theme.isDarkMode ? "translateX(16px)" : "translateX(0)"};
  }

  &:checked {
    background-color: ${({ theme }) =>
      darken(0.2, theme.switchBackgroundColor)};
  }
`;

const IconWrapper = styled.button`
  border: none;
  background: ${({ theme }) => theme.switchHandleColor};
  padding: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    scale: 1.03;
  }
`;

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const ThemeSwitch = ({ isDarkMode, setIsDarkMode }: Props) => {
  return (
    <SwitchContainer>
      <SwitchLabel>
        <IconWrapper
          style={{ display: isDarkMode ? "flex" : "none" }}
          onClick={() => setIsDarkMode(false)}
        >
          <FiSun size={20} />
        </IconWrapper>
        <IconWrapper
          style={{ display: isDarkMode ? "none" : "flex" }}
          onClick={() => setIsDarkMode(true)}
        >
          <FiMoon size={20} />
        </IconWrapper>
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default ThemeSwitch;
