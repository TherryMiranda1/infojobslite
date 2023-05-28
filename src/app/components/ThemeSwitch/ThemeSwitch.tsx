import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styled from "styled-components";
import { darken } from "polished";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 8px;
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

const IconWrapper = styled.span`
  margin-right: 4px;
`;

interface Props {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeSwitch = ({ isDarkMode, toggleTheme }: Props) => {
  return (
    <SwitchContainer>
      <SwitchLabel>
        <IconWrapper>
          <FiSun />
        </IconWrapper>
        <SwitchInput
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <IconWrapper>
          <FiMoon />
        </IconWrapper>
      </SwitchLabel>
    </SwitchContainer>
  );
};

export default ThemeSwitch;
