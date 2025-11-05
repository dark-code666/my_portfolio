import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00E5FF" }, 
    secondary: { main: "#00FF88" }, 
    background: {
      default: "#0A0F1C", 
      paper: "#111827", 
    },
    text: {
      primary: "#E0E0E0", 
      secondary: "#9CA3AF", 
    },
    divider: "#1F2937",
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto Mono', monospace",
    h4: {
      fontWeight: 600,
      letterSpacing: "0.5px",
      color: "#00E5FF", 
    },
    body1: {
      color: "#D1D5DB",
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#00C4D6",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#00E5FF",
            },
            "&:hover fieldset": {
              borderColor: "#00FF88",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00FF88",
            },
          },
        },
      },
    },
  },
});

export default darkTheme;
