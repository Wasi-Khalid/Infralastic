import { useNavigate } from "react-router-dom";
import UserCoverComponent from "../../components/Client/UserProfile/UserCoverComponet";
import UserAboutComponent from "../../components/Client/UserProfile/UserAboutComponent";
import { Col, Row } from "react-bootstrap";
import UserActivityTimeLineComponent from "../../components/Client/UserProfile/UserActivityTimeLineComponent";
import AccountsComponent from "../../components/Client/UserProfile/UserAccountsComponent";
import UserAuthenticationComponent from "../../components/Client/UserProfile/UserAuthenticationComponent";
import UserRecentDeviceTableComponent from "../../components/Client/UserProfile/UserRecentDeviceTableComponent";
import UserDeleteAccountComponent from "../../components/Client/UserProfile/UserDeleteAccountComponent";
const UserProfile = () => {
const router = useNavigate();
   

return (
    <div>
        <UserCoverComponent />
        <Row>
            <Col md={3}>
                <UserAboutComponent/>
                <br/>
                <AccountsComponent/>
            </Col>
            <Col md={9}>
                <UserActivityTimeLineComponent/>
                <br/>
                <UserAuthenticationComponent/>
                <br/>
            </Col>
            <Col md={12}>
                <UserRecentDeviceTableComponent/>
                <br/>
                <UserDeleteAccountComponent/>
            </Col>
            
        </Row>
    </div>
)
}
export default UserProfile;

