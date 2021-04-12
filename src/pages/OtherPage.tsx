import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const OtherPage: React.FC = observer(() => {
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
                <h1>{t("otherpage.title")}</h1>
                <Button disabled={localState.disabled} onClick={() => localState.setDisabled(!localState.disabled)}>
                    {t("otherpage.button")}
                </Button>
            </Container>
        </Jumbotron>
    );
});

export default OtherPage;
