import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Toolbar, makeStyles, Button } from "@material-ui/core";

const DesktopView = ({ logo, headerItems }) => {

    const useStyles = makeStyles(() => ({
        menuButton: {
            fontFamily: "inter",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px",
            textTransform: "none"
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },
        drawerContainer: {
            padding: "20px 30px",
        },
    }));

    const { menuButton, toolbar } = useStyles();

    const getMenuButtons = () => {
        return headerItems.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "#161616",
                        className: menuButton,
                        component: RouterLink,
                        to: href
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <>
            <Toolbar className={toolbar}>
                {logo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        </>
    )
}

export default DesktopView