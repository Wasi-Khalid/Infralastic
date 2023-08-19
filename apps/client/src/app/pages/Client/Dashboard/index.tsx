import './dashboard.scss';
import { Col, Row } from "react-bootstrap";
import bogus from '../../../../assets/login-illustration-2 1.png';
import StatsComponent from "../../../components/Client/Dashbaord/StatsComponent";
import ReportsComponent from "../../../components/Client/Dashbaord/ReportsComponent";
import TimelineComponent from "../../../components/Client/Dashbaord/TimelineComponent";
import AssetDetailComponent from "../../../components/Client/Dashbaord/AssetDetailComponent";
import AlertComponent from "../../../components/Client/Dashbaord/AlertComponent";
import { useEffect, useState } from "react"; // Added useState
import { useGlobalSelector } from "@infralastic/global-state";

const Dashboard = () => {
  const userInfo = useGlobalSelector((state) => state.user.userInfo);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const hours = now.getHours();

      let newGreeting = "";

      if (hours >= 0 && hours < 12) {
        newGreeting = "Good Morning";
      } else if (hours >= 12 && hours < 18) {
        newGreeting = "Good Afternoon";
      } else {
        newGreeting = "Good Evening";
      }

      setGreeting(newGreeting);
    };

    updateGreeting();

    const interval = setInterval(updateGreeting, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <br />
      <div>
        <Row className="pb-3">
          <Col md={4}>
            <div className="row-1-h">
              <div className="shadow d-flex bg-white rounded p-3">
                <div>
                  <p className="m-0">{greeting},</p>
                  <p className="theme-font theme-danger">{userInfo?.result?.user_name ?userInfo?.result?.user_name : userInfo?.user_name }👋</p>
                  <p className="fw-light m-0">
                    We’re hoping that you will definitely like this.
                  </p>
                </div>
                <div>
                  <img src={bogus} width="110" height="135" alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="row-1-h">
              <StatsComponent />
            </div>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col md={8}>
            <div className="row-2-h">
              <ReportsComponent />
            </div>
          </Col>
          <Col md={4}>
            <div className="row-2-h">
              <TimelineComponent />
            </div>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col md={4}>
            <div className="row-3-h">
              <AssetDetailComponent />
            </div>
          </Col>
          <Col md={8}>
            <div className="row-3-h">
              <AlertComponent />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
