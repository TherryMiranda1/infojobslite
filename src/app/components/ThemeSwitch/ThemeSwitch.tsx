import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styled from "styled-components";

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
