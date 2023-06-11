import './admin.scss';
import {Card, Col, Row} from "react-bootstrap";
import SettingCard from "../../../components/Client/Admin/SettingCard";
import {AiOutlineSetting} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
const Admin = () => {
  const router = useNavigate();
  return(
    <>
      <Card className='mt-5 shadow theme-font'>
        <Card.Body>
          <div className='p-2'>
            <h5>Account Settings</h5>
            <p className='text-muted'>Manage account configurations and customizations for your service desk</p>
          </div>
          <Row className='mt-3'>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='Global Settings'
                description='Lorem ipsum dolor sit amet consectetur. Fringilla ipsum amet turpis tempor.'
                click={() => router('/global-setting')}
                />
            </Col>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='Plans & Billing'
                description='Manage plans, subscriptions and licenses'
                click={() => router('/global-setting')}

              />
            </Col>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='Email Configuration'
                description='Configure automatic notifications to users based on specific events'
                click={() => router('/global-setting')}
              />
            </Col>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='Audit Log'
                description='Lorem ipsum dolor sit amet consectetur. Habitant sodales rhoncus euismod enim.'
                click={() => router('/global-setting')}
              />
            </Col>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='LDAP'
                description='Lorem ipsum dolor sit amet consectetur. Ornare sapien felis sit elementum.'
                click={() => router('/global-setting')}
              />
            </Col>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='SAML'
                description='Lorem ipsum dolor sit amet consectetur. Fringilla ipsum amet turpis tempor.'
                click={() => router('/global-setting')}
              />
            </Col>
            <Col md={3}>
              <SettingCard
                icon={<AiOutlineSetting size={20} />}
                name='OAUTH'
                description='Lorem ipsum dolor sit amet consectetur. Fringilla ipsum amet turpis tempor.'
                click={() => router('/global-setting')}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}
export default Admin;
