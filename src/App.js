import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
//Material-UI
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/UI/Theme";
import Footer from "./components/UI/Footer";
import Contactme from "./components/Contactme";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contactme/>}/>
          <Route path="/thankyou" element={<ThankYou/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
