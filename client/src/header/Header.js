import React from 'react'
import { useState, useEffect } from 'react'
import { AppBar, makeStyles } from "@material-ui/core";
import { ReactComponent as Logo } from './assets/logo.svg'
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Header = ({ headerItems }) => {

    const useStyles = makeStyles(() => ({
        header: {
            position: "fixed",
            backgroundColor: "#FFFFFF",
            paddingRight: "79px",
            paddingLeft: "118px",
            "@media (max-width: 900px)": {
                paddingLeft: 0,
            },
        },
        logoIcon: {
            width: "80px",
            height: "auto",
        }
    }));

    const { header, logoIcon } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const logo = (
        <Logo className={ logoIcon }/>
    );
    
    return (
        <header>
            <AppBar className={header}>
                {mobileView ?
                    <MobileView logo={logo} headerItems={headerItems} setState={setState} drawerOpen={drawerOpen} /> :
                    <DesktopView logo={logo} headerItems={headerItems} />
                }
            </AppBar>
        </header>
    );
}

export default Header