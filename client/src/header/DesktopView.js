import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Toolbar, makeStyles, Button } from "@material-ui/core";

const DesktopView = ({ logo, headerItems }) => {

    const useStyles = makeStyles(() => ({
        menuButton: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            size: "18px",
            marginLeft: "38px"
        },
        toolbar: {
            display: "flex",
            justifyContent: "space-between",
        },
        drawerContainer: {
            padding: "20px 30px",
        },
        button: {
            textTransform: "none"
        }
    }));

    const { menuButton, toolbar, button } = useStyles();

    const getMenuButtons = () => {
        return headerItems.map(({ label, href }) => {
            return (
                <Button className={button}
                    {...{
                        key: label,
                        color: "#000000",
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