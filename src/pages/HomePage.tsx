// TODO: Separete components in files
import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = observer(() => {
    const { t } = useTranslation("common");
    const localState = useLocalObservable(() => ({
        disabled: false,
        setDisabled(value: boolean) {
            localState.disabled = value;
        },
    }));

    return (
        <Jumbotron className="p-4">
            <Container className="w-50 p-0 text-center">
                <h1>{t("homepage.title")}</h1>
            </Container>
        </Jumbotron>
    );
});

export default HomePage;
