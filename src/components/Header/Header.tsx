import React from "react";
import c from "./Header.module.css";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {Container} from "@material-ui/core";

const Header = () => {
    return (
        <AppBar position="static" className={c.header}>
            <Container maxWidth="md">
                <div className={c.header__toolbar}>
                    <div className={c.header__left}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            Articles
                        </Typography>
                    </div>
                    <Button color="inherit">Login</Button>
                </div>
            </Container>
        </AppBar>
    );
}

export default Header;