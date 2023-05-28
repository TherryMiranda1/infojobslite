"use client";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { ListOfOffers } from "./views/OffersView";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import { OffersContainer } from "./context/offersContext";
import { AppContainer, ContentStyled } from "./components/App.styled";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <OffersContainer>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ContentStyled className={poppins.className}>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <AppContainer>
            <ListOfOffers />
          </AppContainer>
        </ContentStyled>
      </ThemeProvider>
    </OffersContainer>
  );
}
