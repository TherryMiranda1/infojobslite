"use client";
import React, { useState } from "react";
import { Logo } from "../Logo";
import { NavBarStyled, TitleStyled } from "./LayoutStyled";
import { useScrollDirection } from "@/app/hooks/useScroll";
import InputText from "../Inputs/Text/InputText";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const { awayOfTop } = useScrollDirection();
  return (
    <NavBarStyled awayOfTop={awayOfTop || false}>
      <TitleStyled>
        <Logo />
        <strong>lite</strong>
      </TitleStyled>
      <InputText
        onChange={(e) => setSearchText(e)}
        placeholder={"Puesto, empresa o palabra clave"}
        buttonOnClick={() => setSearchText}
      />
    </NavBarStyled>
  );
};

export default Navbar;
