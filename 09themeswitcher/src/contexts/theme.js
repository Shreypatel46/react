import React, { createContext, useContext } from 'react';

// giving by default value to context ,not like earlier where it was null
export const ThemeContext=createContext({
    themeMode : "light",
    darkTheme : ()=>{},
    lightTheme :()=>{},
    // whenever there is context call it will get above two methods & property value. so along with state these can also be pass

})
export const ThemeProvider= ThemeContext.Provider
// custom hooks can also be exported in our case theme , as hooks are function add use to theme n export ur hooks
export default function useTheme(){
    return  useContext(ThemeContext)
}