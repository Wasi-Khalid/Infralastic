import {Card, Col, Row} from "react-bootstrap";
import {useState} from "react";
import GlobalSettingTable from "../../../../components/Client/Admin/GlobalSettingTable";
import {useNavigate} from "react-router-dom";

const UserTable = () => {
  const [user, setUser] = useState(true);
  const [company, setCompany] = useState(false);
  const router = useNavigate();
  return(
    <div className='theme-font'>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="p-2">
                <h5 className='mb-3'>Global Settings</h5>
                <p
                  className={user ? 'active fs-7 mb-2 p-3' : 'mb-2 fs-7'}
                  onClick={() => {
                    setUser(true)
                    setCompany(false)
                    router('')
                  }}
                >User Administration</p>
                <p
                  className={company ? 'active fs-7 mb-2 p-3' : 'fs-7'}
                  onClick={() => {
                    setUser(false)
                    setCompany(true)
                  }}
                >Company Details</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <GlobalSettingTable />
        </Col>
      </Row>
    </div>
  )
}
export default UserTable;
