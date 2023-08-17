import { Card, Container, Form } from "react-bootstrap";
import { IoLogoGoogle } from "react-icons/io";
import { IoLogoMicrosoft } from "react-icons/io5";

const EmailConfiguration = () => {
    return(
        <div className="">
            <Card className="rounded-4">
                <Card.Body>
                <br/>
                <h4 className="Theme-font">Email Configuration</h4>
                <h6 className="Theme-font text-muted">Enter Decrtiption here</h6>
                <br/>
                <br/>
                <Container>
                    <Form>
                    <div className="w-100 d-flex">
                        <div className="w-25">
                            <h6>Name</h6>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        >
                        </input>
                    </div>
                    <br/>
                    <div className="w-100 d-flex">
                        <div className="w-25">
                            <h6>Your HelpDesk Email</h6>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email"
                        >
                        </input>
                    </div>
                    <br/>
                    <div className="w-100 d-flex">
                        <div className="w-25">
                            <h6>Assign To Group</h6>
                        </div>
                        <Form.Select className="text-muted" aria-label="Select Group ">
                        <option>Select Group</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </Form.Select>
                    </div>
                    <br/>
                    <div className="w-100 d-flex">
                        <div className="w-25 theme-Danger">
                            <h6 className="theme-font theme-danger">Mail Server</h6>
                        </div>
                        <div className="w-25 d-flex align-items-center">
                            <div className="d-flex">
                                <input
                                className=""
                                type="radio"
                                />
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <h6 className="m-0">Default</h6>
                            </div>
                        </div>
                        <div className="w-25 d-flex align-items-center">
                            <div className="d-flex">
                                <input
                                className=""
                                type="radio"
                                />
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <h6 className="m-0">Use Your Own Mail Server</h6>
                            </div>
                        </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                        <div className="w-25 theme-Danger">
                            <h6 className="theme-font theme-danger">Email System</h6>
                        </div>
                        <div className="w-25 d-flex align-items-center">
                            <div className="d-flex">
                                <input
                                className=""
                                type="radio"
                                />
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <h6 className="m-0">Incoming & Outgoing </h6>
                            </div>
                        </div>
                        <div className="w-25 d-flex align-items-center">
                            <div className="d-flex">
                                <input
                                className=""
                                type="radio"
                                />
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <h6 className="m-0">Use Your Own Mail Server</h6>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div>
                        <br/>
                    <div className="w-100 d-flex">
                            <div className="w-100 d-flex">
                            <input
                            className="me-2"
                            type="checkbox"
                            ></input>
                            <h6 className="m-0">Delete Emails From After Fetching?</h6>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <div className="theme-danger">
                        <h5>Email Service</h5>
                        <br/>
                        <div className="">
                        <button className="mx-1 p-2 user-color border-0 theme-danger"><IoLogoMicrosoft className="user-color" size={35}/></button>
                        <button className="mx-3 p-2 user-color border-0 theme-danger"><IoLogoGoogle className="user-color" size={35}/></button>
                        </div>
                    </div>
                    <br/>
                    <div className="w-100 d-flex justify-content-end">
                    <button className="btn btn-secondary mx-1">Cancel</button>
                    <button className="btn btn-primary bg-theme-danger border-0 mx-1">Save</button>
                    </div>
                    </Form>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )

}
export default EmailConfiguration;