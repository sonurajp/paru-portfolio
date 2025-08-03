import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<Work />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
