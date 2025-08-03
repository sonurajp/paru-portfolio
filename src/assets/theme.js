import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // Force light mode
  },
  typography: {
    fontFamily: '"Geologica", sans-serif',
    allVariants: {
      textAlign: "left",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        p: {
          margin: 0,
        },
      },
    },
  },
});

export default theme;
