import { Card, Button } from "react-bootstrap";
import "./user-delete-account-component.scss"

const UserDeleteAccountComponent = () => {
    return (
        <Card className="shadow border-0">
            <Card.Body>
                <div className="p-3">
                    <div>
                        <h5 className="theme-font">Delete Account</h5>
                        <div className="user-color p-3 rounded">
                        <h6 className="theme-font theme-danger">Are you sure you want to delete your account?</h6>
                        <p className="text-muted m-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input me-2" />
                            I Confirm My Account Deactivation
                        </label>
                    </div>
                    <div className="d-flex justify-content-end mt-4">
                        <Button className="bg-theme-danger border-0 px-3">Deactivate Account</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default UserDeleteAccountComponent;
