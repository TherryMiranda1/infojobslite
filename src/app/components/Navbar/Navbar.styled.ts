"use client";
import { styled } from "styled-components";

export const NavBarStyled = styled.section`
  position: fixed;
  top: 0;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.1s ease-in-out;
  width: 100%;
  transition: all 0.2s ease-in-out;
  @media (max-width: 590px) {
    justify-content: center;
    border-radius: 0;
  }
`;

export const TitleStyled = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.2rem;
  padding: 0.4rem;
  margin: 0;
  color: ${({ theme: { colors } }) => colors.inverse};
`;
export const LogoStyled = styled.svg`
  width: 100px;
  height: 40px;
`;
