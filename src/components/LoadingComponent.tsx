import React from "react";
import { Button, Spinner } from "react-bootstrap";

export const LoadingComponent: React.FC = () => {
    return (
        <Button variant="outline-primary" disabled>
            <Spinner className="align-middle" as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        </Button>
    );
};
