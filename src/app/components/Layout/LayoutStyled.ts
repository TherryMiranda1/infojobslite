"use client";
import { styled } from "styled-components";

interface NavProps {
  awayOfTop: boolean;
}

export const LayoutStyled = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AppContainer = styled.main`
  margin: auto;
  max-width: 1200px;
  margin-top: 30px;
`;

export const NavBarStyled = styled.section<NavProps>`
  background: ${(props) => (props.awayOfTop ? "#ffffff" : "#f2f2f2")};
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.1s ease-in-out;
  box-shadow: ${(props) =>
    props.awayOfTop ? "rgba(0, 0, 0, 0.16) 0px 1px 4px;" : ""};
  margin-top: 20px;
  @media (max-width: 480px) {
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
`;
export const LogoStyled = styled.svg`
  width: 100px;
  height: 40px;
`;
