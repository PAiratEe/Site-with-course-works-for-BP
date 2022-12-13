import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import classes from './Navbar.module.css';
import stark from "../../../СПБГУ.jpg"
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
                                fontFamily: "Microsoft Sans Serif",
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
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                            }}
                        >
                            Список кафедр
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/teachers">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                            }}
                        >
                            Список преподавателей
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/courseworks">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                            }}
                        >
                            Список научных работ
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
                                fontFamily: "Microsoft Sans Serif",
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
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                            }}
                        >
                            Список кафедр
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/teachers">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Microsoft Sans Serif",
                                textTransform: "capitalize",
                            }}
                        >
                            Список преподавателей
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/login">
                        <Button
                            id="basic-button"
                            sx={{
                                color: "whitesmoke",
                                textShadow: "0px 0px 3px gray",
                                fontSize: "18px",
                                fontFamily: "Microsoft Sans Serif",
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
                                fontFamily: "Microsoft Sans Serif",
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