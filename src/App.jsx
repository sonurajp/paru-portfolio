import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import { CaseStudy } from "./pages/CaseStudy";
import Resume from "./pages/Resume/Resume";
import About from "./pages/About/About";




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/work/:id" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
