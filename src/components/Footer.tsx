import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const { t } = useTranslation("common");
    return (
        <Container className="align-bottom">
            <Row className="align-bottom">
                <Col className="text-center">
                    <p className="text-center">{t("footer.copyright")}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
