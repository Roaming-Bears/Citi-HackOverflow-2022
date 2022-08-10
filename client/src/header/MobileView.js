import React from 'react'
import { Link, Link as RouterLink } from "react-router-dom"
import { Toolbar, IconButton, SwipeableDrawer, makeStyles, MenuItem } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const MobileView = ({ logo, headerItems, setState, drawerOpen }) => {

    const useStyles = makeStyles(() => ({
        drawerContainer: {
            padding: "20px 30px",
        },
    }));

    const { drawerContainer } = useStyles();

    const handleDrawerOpen = () => {
        setState((prevState) =>
            ({ ...prevState, drawerOpen: true }));
    }
    const handleDrawerClose = () => {
        setState((prevState) =>
            ({ ...prevState, drawerOpen: false }));
    }

    const getDrawerChoices = () => {
        return headerItems.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "#000000",
                        key: label,
                    }}
                >
                    <MenuItem
                        style={{ textTransform: "none" }}
                    >
                        {label}
                    </MenuItem>
                </Link>
            );
        });
    };

    return (
        <Toolbar>
            <IconButton
                {...{
                    // allows the button to be positioned at the start of the toolbar
                    edge: "start",
                    color: "#000000",
                    // “aria-label": “menu" and “aria-haspopup": “true" are meant for 
                    // screen readers to notify users who have visual impairments that 
                    // this element is a menu and has a pop-up, respectively.
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    // solves the problem of too many re-renders
                    onClick: ()=>handleDrawerOpen(),
                }}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    // When we click on anything outside of the drawer, 
                    // the handleDrawerClose function will be called
                    onClose: handleDrawerClose,
                }}
            >
                <div className={drawerContainer}>
                    {getDrawerChoices()}
                </div>
            </SwipeableDrawer>
            <div>{logo}</div>
        </Toolbar>
    );
}

export default MobileView