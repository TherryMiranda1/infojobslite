'use client'
import { ThemeProvider } from "styled-components";
import {
  AppContainer,
  NavBarStyled,
  TitleStyled,
} from "./components/Layout/LayoutStyled";
import Navbar from "./components/Layout/Navbar";
import { Logo } from "./components/Logo";
import "./globals.css";
import { Poppins } from "next/font/google";
import { darkTheme, lightTheme, theme } from "./theme";
import { useState } from "react";

export const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata = {
  title: "InfoJobs Lite",
  description: "Mas pequeño, mas rapido, mas cool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <AppContainer>{children}</AppContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
