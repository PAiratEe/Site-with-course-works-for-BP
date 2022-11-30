import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";
import classes from './Navbar.module.css';
import logo from "../../../spbu.png"
import BasicMenu from "../dropdownMenu/dropdownMenu";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
        isAuth
        ?
        <div className={classes.navbar}>
            <Link className={classes.link} to="/"><img className={classes.img} src={logo}/></Link>
            <div className={classes.navbar__links}>
                <Link className={classes.link} to="/about">О сайте</Link>
                <Link className={classes.link} to="/posts">Список кафедр</Link>
                <Link className={classes.link} to="/teachers">Список преподавателей</Link>
                <BasicMenu/>
            </div>
        </div>
        :
        <div className={classes.navbar}>
            <Link className={classes.link} to="/"><img src={logo}/></Link>
            <div className={classes.navbar__links}>
                <Link className={classes.link} to="/about">О сайте</Link>
                <Link className={classes.link} to="/posts">Список кафедр</Link>
                <Link className={classes.link} to="/teachers">Список преподавателей</Link>
                <Link className={classes.link} to="/login">Войти</Link>
            </div>
        </div>
    );
};

export default Navbar;