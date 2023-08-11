import { Card, Container, Form } from "react-bootstrap";
const IncomingServer = () => {
    return (
        <div className="">
            <br/>
            <Card className="shadow border-0">
                <Card.Body>
                    <h5 className="Theme-font">Incoming Server</h5>
                    <br/>
                    <br/>
                    <Container>
                    <Form>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Name:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Server Type:</h6>
                            </div>
                            <div className="w-75">
                            <select className="form-control">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                             </select>
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Gmail:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="bool" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Server Name:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Port:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">SSL-tls:</h6>
                            </div>
                            <div className="w-75">
                            <input className="" type="checkbox" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">User Name:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Password:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Priority:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Keep Attachments:</h6>
                            </div>
                            <div className="w-75">
                            <input className="" type="checkbox" />
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                        <button className="btn btn-secondary mx-2">Cancel</button>
                        <button className="btn btn-primary">Save</button>
                        </div>
                    </Form>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}
export default IncomingServer;