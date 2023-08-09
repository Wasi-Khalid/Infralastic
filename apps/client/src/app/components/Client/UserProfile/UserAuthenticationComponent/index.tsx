import React from "react";
import { Card, Button } from "react-bootstrap";

const UserAuthenticationComponent = () => {
    return (
        <Card className="shadow border-0">
            <Card.Body className="d-flex flex-column">
                <div className="flex-grow-1">
                    <h5 className="theme-font">Two-Step Verification</h5>
                    <p className="">Two-factor Authentication is not enabled yet</p>
                    <p className="">
                        Two-factor Authentication adds a layer of security to your account by requiring more than a password to log in.
                        <a href="#">Learn more</a>
                    </p>
                </div>
                <div className="align-self-end">
                    <Button className="bg-theme-danger border-0 px-3">Enable Two-Factor Authentication</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserAuthenticationComponent;
