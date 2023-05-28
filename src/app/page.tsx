"use client";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { ListOfOffers } from "./views/OffersView";
import { darkTheme, lightTheme } from "./theme";
import { useState } from "react";
import { OffersContainer } from "./context/offersContext";
import { AppContainer, ContentStyled } from "./components/App.styled";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <OffersContainer>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ContentStyled>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <AppContainer>
            <ListOfOffers />
          </AppContainer>
        </ContentStyled>
      </ThemeProvider>
    </OffersContainer>
  );
}
