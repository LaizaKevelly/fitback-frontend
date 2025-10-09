import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#B25C0A",
      dark: "#8C4708",
      light: "#F28C1F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#3C3C3C",
      dark: "#303030",
      contrastText: "#F5F5F5",
    },
    error: {
      main: "#B3261E",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#38A169",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#3C3C3C",
      secondary: "#303030",
      disabled: "#303030",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#E6E6E6",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "1.75rem",
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.3,
    },
    body1: {
      fontWeight: 400,
      fontFamily: "Inter, sans-serif",
    },
    subtitle1: {
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          maxWidth: "400px",
          minWidth: "120px",
          height: "48px",
          width: "100%",
          fontSize: "1rem",
          borderRadius: "4px",
          textTransform: "none",
          transition: "all 0.5s ease-in-out",
        },
        containedPrimary: {
          color: "#FFFFFF",
          backgroundColor: "#B25C0A",
          border: "none",
          "&:hover": {
            backgroundColor: "#8C4708",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
          },
          "&:active": {
            backgroundColor: "#8C4708",
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: "#B25C0A",
          color: "#B25C0A",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            borderColor: "#B25C0A",
            backgroundColor: "#F5F5F5",
          },
          "&:active": {
            borderColor: "#B25C0A",
            backgroundColor: "#F5F5F5",
          },
        },
        text: {
          color: "#B25C0A",
          "&:hover": {
            backgroundColor: "rgba(178, 92, 10, 0.1)",
          },
          "&:active": {
            backgroundColor: "rgba(140, 71, 8, 0.25)",
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        child: {
          backgroundColor: "rgba(178, 92, 10, 0.4)",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#3C3C3C",
            opacity: 0.6,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "1px solid #E6E6E6",
          },
          "&:hover:not(.Mui-disabled)::before": {
            borderBottom: "2px solid #B25C0A",
          },
          "&.Mui-focused::before": {
            borderBottom: "2px solid #B25C0A",
          },
          "&.Mui-error::before": {
            borderBottom: "2px solid #B3261E",
          },
          "&.Mui-disabled::before": {
            borderBottom: "1px dashed #E6E6E6",
          },
        },
        input: {
          "&.Mui-disabled": {
            color: "#3C3C3C",
            WebkitTextFillColor: "#3C3C3C",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E6E6E6",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B25C0A",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B25C0A",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B3261E",
          },
          "&:hover &:disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "#B3261E",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: "#3C3C3C",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#B25C0A",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
            color: "#F28C1F",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#E6E6E6",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: "#303030",
          borderBottom: "1px solid #E6E6E6",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#F5F5F5",
          },
          "& .MuiTableCell-root": {
            borderBottom: "1px solid #E6E6E6",
          },
        },
      },
    },
  },
});

export default mainTheme;
