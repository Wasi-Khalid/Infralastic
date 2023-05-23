import {Col, DropdownButton, Row, Dropdown, InputGroup, Form} from "react-bootstrap";
import './employees-filter-component.scss';
import {FiMapPin} from "react-icons/fi";
import {BsBuildings} from "react-icons/bs";
import {BiSearch, BiSitemap, BiUserCheck} from "react-icons/bi";
import {getLocation} from "../../../../services/api";
import {useEffect, useState} from "react";
import {fetchAllCompany} from "../../../../services/store/actions/Company";
import {fetchAllDepartment} from "../../../../services/store/actions/Department";
import {useAppDispatch} from "../../../../services/store/hooks";
const EmployeesComponent = () => {
    const dispatch = useAppDispatch();
    const [location, setLocation] = useState<any>([]);
    const [company, setCompany] = useState<any>([])
    const [department, setDepartment] = useState<any>([])
    const fetchLocation = () => {
        const config = {}
        getLocation(config).then((res: any) => {
            setLocation(res.data.result.location_details)
        })
    }
    const getCompany = () => {
        const config: any = {}
        try {
            dispatch(fetchAllCompany(config)).then(async (res: any) => {
                setCompany(res.payload.company_details)
            });
        } catch (err: any) {
            console.error(err);
        }
    }
    const getDepartment = () => {
        const config: any = {}
        try {
            dispatch(fetchAllDepartment(config)).then(async (res: any) => {
                setDepartment(res.payload.departments_details)
            });
        } catch (err: any) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchLocation();
        getCompany();
        getDepartment();
    }, [])
  return(
      <div className='d-flex align-items-center justify-content-center w-100'>
          <div className='pe-3'>
              <InputGroup className="shadow p-2 bg-white rounded">
                  <InputGroup.Text
                      className='bg-white border-0'
                      id="basic-addon1">
                      <BiSearch size={22} />
                  </InputGroup.Text>
                  <Form.Control
                      className='fs-7 border-0'
                      placeholder="Search Employee"
                      aria-label="Username"
                  />
              </InputGroup>
          </div>
          <div className='bg-dark filter-container rounded p-2'>
              <Row>
                  <Col className='br-1' md={3}>
                      <DropdownButton
                          className='bg-white rounded py-1'
                          id="dropdown-basic-button"
                          variant='white'
                          title={<span><FiMapPin className='me-2'/> Select Location</span>}
                      >
                          {location?.map((item: any) => (
                              <Dropdown.Item className='theme-font fs-7' id={item.location_id} href="">{item.location_name}</Dropdown.Item>
                          ))}
                      </DropdownButton>
                  </Col>
                  <Col className='br-1' md={3}>
                      <DropdownButton
                          className='bg-white rounded py-1'
                          id="dropdown-basic-button"
                          variant='white'
                          title={<span><BsBuildings className='me-2'  /> Select Company</span>}
                      >
                          {company?.map((item: any) => (
                              <Dropdown.Item className='theme-font fs-7' id={item.company_id} href="">{item.company_name}</Dropdown.Item>
                          ))}
                      </DropdownButton>
                  </Col>
                  <Col className='br-1' md={3}>
                      <DropdownButton
                          className='bg-white rounded py-1'
                          id="dropdown-basic-button"
                          variant='white'
                          title={<span><BiSitemap className='me-2'  /> Select Department</span>}
                      >
                          {department?.map((item: any) => (
                              <Dropdown.Item className='theme-font fs-7' id={item.department_id} href="">{item.department_name}</Dropdown.Item>
                          ))}
                      </DropdownButton>
                  </Col>
                  <Col md={3}>
                      <DropdownButton
                          className='bg-white rounded py-1'
                          id="dropdown-basic-button"
                          variant='white'
                          title={<span><BiUserCheck className='me-1'  /> Select By Designation</span>}
                      >
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </DropdownButton>
                  </Col>
              </Row>
          </div>
      </div>
  )
}
export default EmployeesComponent;