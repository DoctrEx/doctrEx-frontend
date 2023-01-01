import { createTheme } from "@mui/material"
import { deepmerge } from "@mui/utils"
const colors = require("tailwindcss/colors")

export const themeColor = deepmerge(colors, {
  primary: {
    main: "#0061FF",
    light: "#3870FF",
    dark: "#0036C8",
  },
  secondary: {
    main: colors.neutral[700],
    light: colors.neutral[400],
    dark: colors.neutral[900],
  },
})

const LIGHT = {
  palette: {
    ...themeColor,
    grey: themeColor.neutral,
    common: {
      black: themeColor.black,
      white: themeColor.white,
    },
    background: {
      default: themeColor.white,
      paper: themeColor.white,
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontSize: 14,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        inputSizeSmall: { paddingTop: ".25rem !important", paddingBottom: ".25rem !important" },
        input: { paddingTop: ".7rem !important", paddingBottom: ".7rem !important" },
        adornedStart: { paddingLeft: ".5rem !important", "& svg": { marginRight: ".25rem" } },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: { paddingTop: "0 !important", paddingBottom: "0 !important" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          minWidth: "unset",
          textTransform: "inherit",
          boxShadow: "none",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: { color: "inherit" },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: { background: "inherit" },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: { background: "inherit", color: "inherit" },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { background: "inherit" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 12px 23px 0px rgb(62 73 84 / 4%)",
          padding: "2rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontSize: "inherit" },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&::before,&::after": { content: "none" },
          background: "transparent",
          "&:hover::not(disabled)": {
            background: "transparent",
          },
        },
        filled: {
          margin: "0px -1px",
          border: "1px solid",
          borderRadius: "4px",

          // "&.MuiInputBase-sizeSmall": { height: "27.125px" },
          // "&:not(.MuiInputBase-sizeSmall)": { height: "2.8375em" },
          "&.Mui-focused:after": { opacity: 1 },
          "& fieldset": { border: 0 },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: themeColor.gray[100],
            borderRadius: "4px",

            "&.Mui-focused:after": { opacity: 1 },
            "& fieldset": { border: 0 },
            "&::before,&::after": { content: "none" },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {},
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1200,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#0061FF",
          boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
          marginBottom: "3rem",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
        },
        dense: {
          height: 50,
          minHeight: 50,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "100%",
          boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
}

const DARK = deepmerge(
  { ...LIGHT },
  {
    palette: {
      mode: "dark",
      grey: {
        50: themeColor.neutral[50],
        100: themeColor.neutral[900],
        200: themeColor.neutral[800],
        300: themeColor.neutral[700],
        400: themeColor.neutral[600],
        500: themeColor.neutral[500],
        600: themeColor.neutral[400],
        700: themeColor.neutral[300],
        800: themeColor.neutral[200],
        900: themeColor.neutral[100],
      },
      secondary: {
        main: colors.neutral[300],
        light: colors.neutral[600],
        dark: colors.neutral[100],
      },
      common: {
        black: themeColor.white,
        white: themeColor.black,
      },
      background: {
        default: themeColor.neutral[900],
        paper: themeColor.black,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#000",
            color: "#FFF",
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            minWidth: "unset",
            textTransform: "inherit",
            boxShadow: "none",
            color: "#FFFFFF",
          },
        },
      },
    },
  }
)

export const LIGHTTHEME = createTheme(LIGHT)
export const DARKTHEME = createTheme(DARK)
