import React, {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import classes from "../Navbar/Navbar.module.css";
import {Button} from "@mui/material";
import {useContext} from "react";
import {AuthContext} from "../../../context";
import {useNavigate} from "react-router-dom";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const nav = useNavigate();

    const logout = event => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.setItem('auth', 'Airat')
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.link}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    color: "whitesmoke",
                    textShadow: "0px 0px 3px gray",
                    fontSize: "18px",
                    fontFamily: "Microsoft Sans Serif",
                    textTransform: "capitalize",
                }}
            >
                {localStorage.getItem('name')} {localStorage.getItem('surname')}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    "& .MuiPaper-root":{
                        backgroundColor: "#87AADF"
                    }
                }}
            >
                <MenuItem
                    onClick={() => nav("/profile")}
                    sx={{
                        color: "whitesmoke",
                        textShadow: "0px 0px 3px gray",
                        fontSize: "18px",
                        fontFamily: "Microsoft Sans Serif",
                        textTransform: "capitalize",
                    }}
                >
                    Мой профиль
                </MenuItem>
                <MenuItem
                    onClick={logout}
                    sx={{
                        color: "whitesmoke",
                        textShadow: "0px 0px 3px gray",
                        fontSize: "18px",
                        fontFamily: "Microsoft Sans Serif",
                        textTransform: "capitalize",
                    }}
                >
                    Выйти
                </MenuItem>
            </Menu>
        </div>
    );
}