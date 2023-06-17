import './device-managment.scss'
import {Card, Dropdown, DropdownButton, Form, InputGroup, Table} from "react-bootstrap";
import {HiChevronUpDown} from "react-icons/hi2";
import {AiOutlineEye, AiOutlinePlus} from "react-icons/ai";
import {BiDotsVerticalRounded, BiSearch} from "react-icons/bi";
import {BsFileEarmarkArrowUp, HiDownload} from "react-icons/all";
import {GoSettings} from "react-icons/go";
import bogus from '../../../../assets/Facebook.png'
import {createSearchParams, useNavigate} from "react-router-dom";
import AgentModal from "../../../components/Modals/AgentModal";
import {useEffect, useState} from "react";
import {getHosts} from "@infralastic/global-state";

const DeviceManagement = () => {
  const router = useNavigate();
  const [show, setShow] = useState(false);
  const [data, setData] = useState<any>([])

  function fetchHosts() {
    const config = {}
    getHosts(config).then((res: any) => {
      setData(res.data.data.hosts)
    })
  }

  useEffect(() => {
    fetchHosts()
  }, [])
  return(
    <>
      <br/>
      <br/>
      <Card>
        <Card.Body>
          <div className='d-flex w-100 p-2'>
            <div className='d-flex align-items-center w-25'>
              <h5 className='m-0 text-uppercase theme-font'>Devices</h5>
            </div>
            <div className="d-flex justify-content-end align-items-center w-75">
              <div className='custom-width'>
                <InputGroup className="shadow p-2 bg-white rounded">
                  <InputGroup.Text
                    className='bg-white border-0'
                    id="basic-addon1">
                    <BiSearch size={22} />
                  </InputGroup.Text>
                  <Form.Control
                    className='header-input border-0'
                    placeholder="Search"
                    aria-label="Username"
                  />
                </InputGroup>
              </div>
              <div className='mx-1'>
                <Dropdown>
                  <Dropdown.Toggle className='bg-transparent border-0'>
                    <button className='theme-border-danger bg-transparent theme-danger theme-font p-2 rounded'>
                      <AiOutlinePlus size={18} className='me-1' /> Add New Device
                    </button>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='theme-font text-muted'>
                    <Dropdown.Item href="#/action-1">SNMP</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">TCP</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">HTTP</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">GENERIC</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className='mx-1'>
                <button
                  className='bg-theme-danger text-white border-0 theme-font p-2 px-3 rounded'
                  onClick={() => setShow(!show)}
                >
                  <HiDownload size={18} className='me-1' /> Install Agent
                </button>
              </div>
              <div className='mx-1'>
                <Dropdown>
                  <Dropdown.Toggle className='bg-transparent border-0 p-0 me-2' id="dropdown-basic">
                    <button
                      className='px-3 py-1 text-white border-0 bg-gray h-34 rounded mx-2'
                    >
                      <GoSettings size={18} />
                    </button>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className='theme-font fs-7'>Request</Dropdown.Item>
                    <Dropdown.Item className='theme-font fs-7'>Damage Report</Dropdown.Item>
                    <Dropdown.Item className='theme-font fs-7'>Perform Maintenance</Dropdown.Item>
                    <Dropdown.Item className='theme-font fs-7'>Assets Audit</Dropdown.Item>
                    <Dropdown.Item href='/confirm-assets' className='theme-font fs-7'>Confirmation</Dropdown.Item>
                    <Dropdown.Item className='theme-font fs-7'>Import Data</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <hr className='m-0 mt-3'/>
          <Table striped className='theme-font' id='departmentTable'>
            <thead className='p-3'>
            <tr className='fs-7'>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>DEPARTMENT nAME<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>Availability<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>Alerts<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>Remote Access<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-end'>ACTION</p></th>
            </tr>
            </thead>
            <tbody>
            {data.map((item: any) => (
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img src={bogus} alt="" width='38' height='38' className='rounded' />
                    <div>
                      <p className='m-0 ms-2 fs-7'>{item?.hostname}</p>
                      <p className='m-0 ms-2 fs-8 text-muted'>Last Login: {item?.label_updated_at}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='status-ico bg-success mx-2'></div>
                    <p className='theme-font m-0'>Online</p>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <div className='d-flex align-items-center'>
                      <div className='d-flex align-items-center px-3 br-1'>
                        <div className='action-ico bg-danger mx-2'>{item?.issues?.failing_policies_count}</div>
                        <p className='m-0 ms-1 fs-7 text-muted'>Critical</p>
                      </div>
                      <div className='d-flex align-items-center px-3 br-1'>
                        <div className='action-ico bg-warning mx-2'>{item?.issues?.total_issues_count}</div>
                        <p className='m-0 ms-1 fs-7 text-muted'>Warning</p>
                      </div>
                      <div className='d-flex align-items-center px-3'>
                        <div className='action-ico bg-info mx-2'>1</div>
                        <p className='m-0 ms-1 fs-7 text-muted'>Info</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle className='bg-transparent border-0'>
                      <button className='theme-border-danger bg-transparent theme-danger theme-font p-2 px-3 rounded'>
                        <BsFileEarmarkArrowUp size={18} className='me-1' /> Connect
                      </button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='theme-font text-muted'>
                      <Dropdown.Item href="#/action-1">None</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td>
                  <div className='d-flex justify-content-end align-items-center'>
                    <button
                      className='bg-transparent border-0'
                      onClick={() => router({
                        pathname: '/device-detail',
                        search: `?${createSearchParams({
                          hostId: item?.id
                        })}`
                      })}><AiOutlineEye className='me-2 mt-1' size={20} />
                    </button>
                    <DropdownButton
                      className="bg-transparent custom-btn"
                      id="dropdown-item-button"
                      title={<BiDotsVerticalRounded className='me-2' size={20} />}
                    >
                      <Dropdown.Item className='theme-font fs-7' as="button">Edit</Dropdown.Item>
                      <Dropdown.Item className='theme-font fs-7' as="button">Delete</Dropdown.Item>
                    </DropdownButton>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </Table>
          <hr/>
        </Card.Body>
      </Card>
      {show &&
        <AgentModal show={show} hide={() => setShow(false)} />
      }
    </>
  )
}
export default DeviceManagement;
