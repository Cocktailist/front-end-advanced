import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  GlobalStyles,
  Wrapper,
  Header,
  Contents,
  Footer,
} from "./commonStyles";

import TestPage from "./pages/TestPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Contents>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </Contents>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
