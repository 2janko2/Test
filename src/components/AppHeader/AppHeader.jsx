import { useState } from "react";
import { Layout, Drawer, Button } from "antd";
import classNames from "classnames";

import classes from "./AppHeader.module.scss";

import logo from "../../assets/img/logo.svg";

const { Header } = Layout;

const AppHeader = (props) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const showMenu = () => {
        setIsMenuVisible(true);
    };
    const hideMenu = () => {
        setIsMenuVisible(false);
    };

    const renderContacts = () => (
        <div className={classes.contacts}>
            Need help? Contact us at{" "}
            <a href="mailto:support@smtp.com?subject=contact Request?body=Could I receive more information concerning...">
                support@smtp.com
            </a>{" "}
            or{" "}
            <a className={classes.contacts__phone} href="tel:+18885555555">
                1-888-555-5555.
            </a>
        </div>
    );

    return (
        <Header className={classes.wrapper}>
            <div className="container">
                <div className={classes.header}>
                    <div className={classes.header__item}>
                        <img
                            className={classes.logo}
                            src={logo}
                            alt="SMTP email delivery"
                        />
                    </div>

                    <div
                        className={classNames(
                            classes.header__item,
                            classes.header__item_contacts
                        )}
                    >
                        {renderContacts()}
                    </div>
                    <Button
                        className={classes.menuToggle}
                        type="link"
                        onClick={showMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Button>
                </div>

                <Drawer
                    placement="right"
                    closable={true}
                    onClose={hideMenu}
                    visible={isMenuVisible}
                >
                    <div className={classes.menuWrapper}>
                        {renderContacts()}
                    </div>
                </Drawer>
            </div>
        </Header>
    );
};

export default AppHeader;
