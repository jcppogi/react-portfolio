import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/topBar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import './App.css'; 

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <div className="app" >

        <main className="content">

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

        </main>
      </div>

    </ThemeProvider>
  </ColorModeContext.Provider>
  );


};

export default App;
