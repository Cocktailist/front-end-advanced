import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import { GlobalStyles, Wrapper, Contents } from "./commonStyles";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import TestPage from "./pages/TestPage";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import CocktailbarPage from "./pages/CocktailbarPage";
import OrderPage from "./pages/OrderPage";
import CocktailPage from "./pages/CocktailPage";

function App() {
  const contentRef = useRef();
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
          <Contents ref={contentRef}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route
                path="/cocktailbar/:cocktailbarId"
                element={<CocktailbarPage />}
              />
              <Route
                path="/cocktailbar/:cocktailbarId/order/menu"
                element={<OrderPage />}
              />
              <Route
                path="/cocktailbar/:cocktailbarId/order/cocktail/:cocktailId"
                element={<CocktailPage contentRef={contentRef} />}
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
