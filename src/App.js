import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
//Material-UI
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
