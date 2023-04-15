import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from "@mui/material";



const primary = "#EC5C2A"
const secondary = "#11023b"
let theme = createTheme(({

    palette: {

        background: {
            default: '#ffffff'
        },
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
    },
    typography: {
        fontFamily: [
            'arial',
        ].join(','),
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    // fontFamily: 'Bebas',
                    fontSize: 18,
                    height: 40,
                    // borderRadius: 30,
                },
                outlinedPrimary: {
                    "&:hover": {
                        color: "white",
                        backgroundColor: "#EC5C2A"
                    }
                }
                ,
                containedPrimary: {
                    paddingRight: 20,
                    height: 48,
                    paddingLeft: 20,
                    // "&:hover": {
                    //     color: primary,
                    //     backgroundColor: "#ffffff",
                    //     boxShadow: `inset 0px 0px 0px 2px ${primary} !important`
                    // }
                },
                textPrimary: {
                    paddingRight: 20,
                    paddingLeft: 20,
                    // "&:hover": {
                    //     boxShadow: `inset 0px 0px 0px 2px ${primary} !important`,
                    //     backgroundColor: "#ffffff",
                    // }
                }
            }

        },
    },


}));

theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
   <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
  </React.StrictMode>
)
