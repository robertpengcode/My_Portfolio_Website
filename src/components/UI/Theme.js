import { createTheme } from "@material-ui/core/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#189AB4",
      dark: "#147F94",
    },
    secondary: {
      main: "#b2ebf2",
      background: "#D4F1F499",
    },
    common: {
      navy: "#05445e",
      red: "#D10000",
      white: "#FFFFFF",
    },
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: ["Open Sans Condensed", "Roboto", "Arial", "sans-serif"].join(
      ","
    ),
  },
});

export default Theme;
