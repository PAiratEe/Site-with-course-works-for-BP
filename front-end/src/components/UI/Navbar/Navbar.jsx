import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import classes from './Navbar.module.css';
import stark from "../../../stark.png"
import BasicMenu from "../dropdownMenu/dropdownMenu";
import {Button} from "@mui/material";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        isAuth
            ?
            <div className={classes.navbar} id="myNavbar">
                <div className={classes.navbar__links}>
                    <Link className={classes.link} to="/">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke"
                            }}
                        >
                            <img className={classes.logo} src={stark}/>
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/about">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            О сайте
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/posts">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Кафедры
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/teachers">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Преподаватели
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/courseworks">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Темы курсовых работ
                        </Button>
                    </Link>
                    <BasicMenu/>
                </div>
            </div>
            :
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link className={classes.link} to="/">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke"
                            }}
                        >
                            <img className={classes.logo} src={stark}/>
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/about">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            О сайте
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/posts">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Кафедры
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/teachers">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Преподаватели
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/login">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Войти
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/register">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Verdana",
                                textTransform: "capitalize",
                            }}
                        >
                            Регистрация
                        </Button>
                    </Link>
                </div>
            </div>
    );
};

export default Navbar;