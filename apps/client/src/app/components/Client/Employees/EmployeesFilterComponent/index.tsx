import {Col, Row, InputGroup, Form} from "react-bootstrap";
import './employees-filter-component.scss';
import {FiMapPin} from "react-icons/fi";
import {BsBuildings} from "react-icons/bs";
import {BiSearch, BiSitemap, BiUserCheck} from "react-icons/bi";
import {getLocation} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {fetchAllCompany, useGlobalDispatch} from "@infralastic/global-state";
import {fetchAllDepartment} from "@infralastic/global-state";

interface filterProps {
  searchData: any;
  location: any;
  department: any;
  company: any
}
const EmployeeFilterComponent = (props: filterProps) => {
    const dispatch = useGlobalDispatch();
    const [locationData, setLocationData] = useState<any>([]);
    const [companyData, setCompanyData] = useState<any>([]);
    const [departmentData, setDepartmentData] = useState<any>([]);
    const [designation, setDesignation] = useState<any>('');
    const fetchLocation = () => {
        const config = {}
        getLocation(config).then((res: any) => {
            setLocationData(res.data.result.model_details)
        })
    }
    const getCompany = () => {
        const config: any = {}
        try {
            dispatch(fetchAllCompany(config)).then(async (res: any) => {
                setCompanyData(res.payload.company_details)
            });
        } catch (err: any) {
            console.error(err);
        }
    }
    const getDepartment = () => {
        const config: any = {}
        try {
            dispatch(fetchAllDepartment(config)).then(async (res: any) => {
                setDepartmentData(res.payload.departments_details)
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
                  <input
                      type='text'
                      className='fs-7 border-0'
                      id='outline-none'
                      placeholder="Search Employee"
                      aria-label="Username"
                      onChange={(e: any) => props.searchData(e.target.value)}
                  />
              </InputGroup>
          </div>
          <div className='bg-dark filter-container rounded p-2'>
              <Row>
                  <Col className='br-1' md={3}>
                      <Form.Group controlId="location">
                          <InputGroup>
                              <InputGroup.Text id="basic-addon1" className='bg-white px-2'><FiMapPin className='me-1'/></InputGroup.Text>
                              <Form.Select
                                className='py-2 ps-0 fs-7 theme-font text-muted border-start-0 '
                                aria-label="Default select example"
                                required={true}
                                onChange={(e: any) => props.location(e.target.value)}
                              >
                                <option value=''>Select Location</option>
                                {locationData?.map((item: any) => (
                                  <option value={item.state_name} className='theme-font fs-7'>{item?.state_name}</option>
                                ))}
                              </Form.Select>
                          </InputGroup>
                      </Form.Group>
                  </Col>
                  <Col className='br-1' md={3}>
                      <Form.Group controlId="company">
                          <InputGroup>
                              <InputGroup.Text id="basic-addon2" className='bg-white px-2'><BsBuildings className='me-2'/></InputGroup.Text>
                              <Form.Select
                                className='py-2 ps-0 fs-7 theme-font text-muted border-start-0 '
                                aria-label="Default select example"
                                required={true}
                                onChange={(e: any) => props.company(e.target.value)}
                              >
                                <option value=''>Select Company</option>
                                {companyData?.map((item: any) => (
                                  <option value={item?.company_name} className='theme-font fs-7'>{item?.company_name}</option>
                                ))}
                              </Form.Select>
                          </InputGroup>
                      </Form.Group>
                  </Col>
                  <Col className='br-1' md={3}>
                      <Form.Group controlId="department">
                          <InputGroup>
                              <InputGroup.Text id="basic-addon2" className='bg-white px-2'><BiSitemap className='me-2'/></InputGroup.Text>
                              <Form.Select
                                className='py-2 ps-0 fs-7 theme-font text-muted border-start-0 '
                                aria-label="Default select example"
                                required={true}
                                onChange={(e: any) => props.department(e.target.value)}
                              >
                                <option value=''>Select Department</option>
                                {departmentData?.map((item: any) => (
                                  <option value={item.department_name} className='theme-font fs-7'>{item?.department_name}</option>
                                ))}
                              </Form.Select>
                        </InputGroup>
                      </Form.Group>
                  </Col>
                  <Col md={3}>
                      <Form.Group controlId="designation">
                          <InputGroup>
                              <InputGroup.Text id="basic-addon2" className='bg-white px-2'><BiUserCheck className='me-2'/></InputGroup.Text>
                              <Form.Select
                                className='py-2 ps-0 fs-7 theme-font text-muted border-start-0 '
                                aria-label="Default select example"
                                required={true}
                                value={designation}
                                onChange={(e: any) => setDesignation(e.target.value)}
                              >
                                <option value=''>Select Designation</option>
                            </Form.Select>
                          </InputGroup>
                      </Form.Group>
                  </Col>
              </Row>
          </div>
      </div>
  )
}
export default EmployeeFilterComponent;
