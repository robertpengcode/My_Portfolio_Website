import React from "react";
import Navbar from "./Navbar";
//Material-UI
import { ThemeProvider } from "@material-ui/styles";
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <h1>Hello Robert</h1>
      {/* {[...new Array(200)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')} */}
    </ThemeProvider>
  );
}

export default App;
