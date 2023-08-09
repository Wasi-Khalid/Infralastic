import { Card, Table } from "react-bootstrap";
const UserRecentDeviceTableComponent = () => {
    return (
        <Card className="shadow border-0">
            <Card.Body>
                <div className="d-flex flex-column">
                    <h5 className="theme-font py-4">Recent Devices</h5>
                            <Table className="w-100 theme-font" striped bordered>
                                <tbody>
                                   <tr>
                                    <th><h5 className="ms-2">Browser</h5></th>
                                    <th><h5 className="ms-2">Device</h5></th>
                                    <th><h5 className="ms-2">Location</h5></th>
                                    <th><h5 className="ms-2">Recent Activities</h5></th>
                                   </tr>
                                   <tr>
                                    <td>Chrome on Windows</td>
                                    <td>Hp Specter 360</td>
                                    <td>Switzerland</td>
                                    <td>10,July,2021 20:07</td>
                                   </tr>
                                   <tr>
                                    <td>Chrome on Iphone</td>
                                    <td>Hp Specter 360</td>
                                    <td>Switzerland</td>
                                    <td>10,July,2021 20:07</td>
                                   </tr>
                                   <tr>
                                    <td>Chrome on Android</td>
                                    <td>Hp Specter 360</td>
                                    <td>Switzerland</td>
                                    <td>10,July,2021 20:07</td>
                                   </tr>
                                   <tr>
                                    <td>Chrome on macOS</td>
                                    <td>Hp Specter 360</td>
                                    <td>Switzerland</td>
                                    <td>10,July,2021 20:07</td>
                                   </tr>
                                   <tr>
                                    <td>Chrome on Windows</td>
                                    <td>Hp Specter 360</td>
                                    <td>Switzerland</td>
                                    <td>10,July,2021 20:07</td>
                                   </tr>
                                   <tr>
                                    <td>Chrome on Android</td>
                                    <td>Hp Specter 360</td>
                                    <td>Switzerland</td>
                                    <td>10,July,2021 20:07</td>
                                   </tr>
                                </tbody>
                            </Table>
                        </div>
            </Card.Body>
        </Card>
    );
};

export default UserRecentDeviceTableComponent;
