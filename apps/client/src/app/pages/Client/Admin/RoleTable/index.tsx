import {Card, Col, Dropdown, Row} from "react-bootstrap";
import {useState} from "react";
import {BsPlus} from "react-icons/bs";
import {LuSettings2} from "react-icons/lu";
import AdminRoleForm from "../../../../components/Client/Admin/AdminRoleForm";
import AdminRoleTable from "../../../../components/Client/Admin/AdminRoleTable";
import AdminUserForm from "../../../../components/Client/Admin/AdminUserForm";
import {useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";

const RoleTable = () => {
  const [user, setUser] = useState(true);
  const [userTable, setUserTable] = useState(false);
  const [role, setRole] = useState(true);
  const [userForm, setUserForm] = useState(false);
  const [roleForm, setRoleForm] = useState(false);
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
                    router('/role-table')
                  }}
                >User Administration</p>
                <p
                  className={company ? 'active fs-7 mb-2 p-3' : 'fs-7'}
                  onClick={() => {
                    setUser(false)
                    setCompany(true)
                    router('/company-table')

                  }}
                >Company Details</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <div>
            <Card>
              <Card.Body>
                <div className="d-flex theme-font p-2">
                  <div className='d-flex align-items-center'>
                <span className='pe-3'>
                <h5
                  className={userTable ? 'theme-danger m-0' :'m-0'}
                  onClick={() => {
                    setUserTable(true)
                    setRole(false)
                    router('/user-table')
                  }}
                >USER</h5>
              </span>
                    <span className='px-3 bs-1'>
                <h5
                  className={role ? 'theme-danger m-0' :'m-0'}
                  onClick={() => {
                    setUserTable(false)
                    setRole(true)
                    router('/company-table')
                  }}
                >ROLE</h5>
              </span>
                  </div>
                  <input type="text" className='form-control p-2 px-3 fs-7 mx-2' placeholder='Search' />
                  <Dropdown>
                    <Dropdown.Toggle className='bg-transparent border-0 p-0 me-2' id="dropdown-basic">
                      <button
                        className='px-3 py-1 text-white border-0 bg-gray h-34 rounded mx-2'
                      >
                        <LuSettings2 size={20} />
                      </button>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className='theme-font fs-7'>Request</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <button
                    className='px-2 pe-3 text-white border-0 bg-theme-danger rounded d-flex h-34 align-items-center'
                    onClick={() => router('/role-form')}
                  >
                    <BsPlus size={20} className='me-2' />Add&nbsp;New&nbsp;Role
                  </button>
                </div>
                <hr className='mt-3 mb-0'/>
                <AdminRoleTable />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default RoleTable;
