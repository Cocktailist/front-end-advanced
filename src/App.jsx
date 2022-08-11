import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import {
  GlobalStyles,
  Wrapper,
  Header,
  Contents,
  Footer,
} from "./commonStyles";

import TestPage from "./pages/TestPage";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import CocktailbarPage from "./pages/CocktailbarPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MantineProvider
        theme={{
          fontFamily: "GmarketSansMedium, sans-serif",
        }}
      >
        <Wrapper>
          <Header />
          <Contents>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route
                path="/cocktailbar/:cocktailbarId"
                element={<CocktailbarPage />}
              />
              <Route path="/test" element={<TestPage />} />
            </Routes>
          </Contents>
          <Footer />
        </Wrapper>
      </MantineProvider>
    </Router>
  );
}

export default App;
