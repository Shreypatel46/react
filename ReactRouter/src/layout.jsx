import React from 'react';
import Header  from "./components/Header/Header";
import Footer  from "./components/footer/footer";
import { Outlet } from "react-router-dom";
// use outlet to pass dynamically home aboutUs -create dynamic layout
function Layout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout