import { Card , Container, Form} from "react-bootstrap";
const OutputServer = () => {
    return (
        <div className="">
            <br/>
            <Card className="shadow border-0">
                <Card.Body>
                    <h5 className="Theme-font">OutPut Server</h5>
                    <br/>
                    <br/>
                    <Container>
                    <Form>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Description:</h6>
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
                                <h6 className="theme-font">SMTP Port:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="number" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">SMTP Server:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">Gmail:</h6>
                            </div>
                            <div className="w-75">
                            <input className="" type="checkbox" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">SMTP Auth:</h6>
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
                                <h6 className="theme-font">Connection Security:</h6>
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
                                <h6 className="theme-font">SMTP User:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
                        <div className="w-100 d-flex">
                            <div className="w-25">
                                <h6 className="theme-font">SMTP Password:</h6>
                            </div>
                            <div className="w-75">
                            <input className="form-control" type="text" />
                            </div>
                        </div>
                        <br/>
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
export default OutputServer;