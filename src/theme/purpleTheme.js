import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const purpleTheme = createTheme({
    palete: {
        primary: {
            main: "#262254"
        },
        secundary: {
            main: "#543884"
        },
        error :{
            main: red.A400
        }
    }
})