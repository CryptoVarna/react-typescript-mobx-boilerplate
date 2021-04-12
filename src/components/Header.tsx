import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import logoImage from "assets/crypto-varna-gold-1000.png";

const Header: React.FC = observer(() => {
    const { t } = useTranslation("common");
    return (
        <Navbar collapseOnSelect expand="md" bg="none" variant="light">
            <Navbar.Brand href={`${process.env.PUBLIC_URL}/#/`}>
                <img src={logoImage} height="48" className="d-inline-block align-top" alt={t("site-name")} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={`${process.env.PUBLIC_URL}/#/`}>{t("nav.home")}</Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/#/otherpage`}>{t("nav.otherpage")}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <hr />
        </Navbar>
    );
});

export default Header;
