"use client";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import { ListOfOffers } from "./views/OffersView";
import { darkTheme, lightTheme } from "./theme";
import { useEffect, useState } from "react";
import { OffersContainer } from "./context/offersContext";
import { AppContainer, ContentStyled } from "./components/App.styled";
import { Poppins } from "next/font/google";
import Banner from "./components/Banner/Banner";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isBanner, setIsBanner] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsBanner(false), 1000);
  }, []);

  return (
    <OffersContainer>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {isBanner ? (
          <Banner />
        ) : (
          <ContentStyled className={poppins.className}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <AppContainer>
              <ListOfOffers />
            </AppContainer>
          </ContentStyled>
        )}
      </ThemeProvider>
    </OffersContainer>
  );
}
