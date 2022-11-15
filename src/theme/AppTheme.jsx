import { CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={purpleTheme} >
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}
