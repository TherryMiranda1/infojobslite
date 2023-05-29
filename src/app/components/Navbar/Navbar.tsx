"use client";
import React from "react";
import { Logo } from "../Logo";
import { NavBarStyled, TitleStyled } from "./Navbar.styled";
import { useScrollDirection } from "@/app/hooks/useScroll";
import InputText from "../Inputs/Text/InputText";
import { useOffersContext } from "@/app/context/offersContext";
import { cleanText } from "@/app/utils/cleanText";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { useTheme } from "styled-components";

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: Props) => {
  const { awayOfTop } = useScrollDirection();

  const DefaultTheme = useTheme();
  return (
    <NavBarStyled
      style={{
        background: awayOfTop
          ? DefaultTheme?.colors.primary
          : DefaultTheme?.colors.infojobsGray,
        boxShadow: awayOfTop ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : "",
      }}
    >
      <TitleStyled>
        <Logo />
        <strong>lite</strong>
      </TitleStyled>
      <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </NavBarStyled>
  );
};

export default Navbar;
