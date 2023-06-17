import './styles/App.css'
import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

export const back_url = "http://localhost:8080/back"

function App() {
    const [isAuth, setIsAuth] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
