import { Component } from "react"
import App from "./App"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Registration from "./Pages/Registration"
import { ADMIN_ROUTE, MAIN_ROUTE,LOGIN_ROUTE, REG_ROUTE } from "./Utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Profile
    }
]
export const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REG_ROUTE,
        Component: Registration
    }
]