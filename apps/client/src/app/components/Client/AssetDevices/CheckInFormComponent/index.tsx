import './check-in-form-component.scss';
import {Card, Col, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import bogus from '../../../../../assets/assign-stamp.png'
import {checkIn, getAllAssets, getAllEmployee, useGlobalDispatch} from "@infralastic/global-state";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {fetchAllDepartment} from "@infralastic/global-state";

const CheckInFormComponent = () => {
    const router = useNavigate();
    const dispatch = useGlobalDispatch();
    const [department, setDepartment]  = useState<any>([])
    const [email, setEmail] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [dueByDate, setDueByDate] = useState('');
    const [assignee, setAssignee] = useState('');
    const [assets, setAssets] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [conditionAtCheckOut, setConditionAtCheckOut] = useState('');
    const [personStatus, setPersonStatus] = useState('');
    const [checkOutNotes, setCheckOutNotes] = useState('');
    const [permanent, setPermanent] = useState(true)
    const [assetData, setAssetData] = useState<any>([])
    const [employeeData, setEmployeeData] = useState<any>([])


    function fetchAssets() {
        const formData: any = {
            company_id: 1,
            page_no: 1
        }
        getAllAssets(formData).then((res: any) => {
            setAssetData(res.data.result.asset_details)
        })
    }

    function fetchAllEmployees() {
        const config: any = {}

        getAllEmployee(config).then((res: any) => {
            setEmployeeData(res.data.result.empolyee_details)
        })
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
        fetchAllEmployees();
        fetchAssets();
        getDepartment();
    }, [])

    const handleSubmit = () => {
        const formData: any = {
            asset_unique_id: JSON.parse(assets),
            employee_id: JSON.parse(assignee),
            employee_email: email,
            permanent: permanent ? "True" : "False",
            person_status: personStatus,
            check_out_notes: checkOutNotes,
            digital_stamp: "digital_stamp",
            check_in_date: checkInDate,
            due_by_date: '1111-11-11',
            department_id: JSON.parse(departmentId)
        }
        checkIn(formData).then((res: any) => {
            toast.success(res.data.result.msg)
            setTimeout(() => {
                router('/confirm-assets')
            }, 3000)
        })
    }
    return(
      <div>
          <Card>
              <Card.Body>
                  <div className='px-3'>
                      <h4 className='theme-font py-4'>Assign Asset</h4>
                      <Form>
                          <Row>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicFirstName">
                                      <Form.Label className='fs-7 mb-1 theme-font'>User Email</Form.Label>
                                      <Form.Control
                                          className='px-2 py-1 fs-7'
                                          type="name"
                                          value={email}
                                          placeholder="User Email"
                                          onChange={(e) => setEmail(e.target.value)}
                                          required={true}
                                      />
                                  </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicFirstName">
                                      <Form.Label className='fs-7 mb-1 theme-font'>Check In Date</Form.Label>
                                      <Form.Control
                                          className='px-2 py-1 fs-7'
                                          type="date"
                                          value={checkInDate}
                                          placeholder="Check In Date"
                                          onChange={(e) => setCheckInDate(e.target.value)}
                                          required={true}
                                      />
                                  </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicCompany">
                                      <Form.Label className='fs-7 mb-1 theme-font'>Assignee</Form.Label>
                                      <Form.Select
                                          className='px-2 py-1 fs-7 theme-font text-muted'
                                          aria-label="Default select example"
                                          required={true}
                                          disabled={departmentId === ''}
                                          value={assignee}
                                          onChange={(e) => setAssignee(e.target.value)}
                                      >
                                          <option value=''>Select Assignee</option>
                                          {employeeData?.filter((item: any) => item.department_id === departmentId).map((item: any) => (
                                              <option value={item.employee_id}>{item.employee_name}</option>
                                          ))}
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicCompany">
                                      <Form.Label className='fs-7 mb-1 theme-font'>Assets</Form.Label>
                                      <Form.Select
                                          className='px-2 py-1 fs-7 theme-font text-muted'
                                          aria-label="Default select example"
                                          required={true}
                                          disabled={departmentId === ''}
                                          value={assets}
                                          onChange={(e) => setAssets(e.target.value)}
                                      >
                                          <option value=''>Select Assets</option>
                                          {assetData?.map((item: any) => (
                                              <option value={item.asset_unique_id}>{item.asset_name}</option>
                                          ))}
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicCompany">
                                      <Form.Label className='fs-7 mb-1 theme-font'>Department</Form.Label>
                                      <Form.Select
                                          className='px-2 py-1 fs-7 theme-font text-muted'
                                          aria-label="Default select example"
                                          required={true}
                                          value={departmentId}
                                          onChange={(e) => setDepartmentId(e.target.value)}
                                      >
                                          <option value=''>Select Department</option>
                                          {department?.map((item: any) => (
                                              <option value={item.department_id}>{item.department_name}</option>
                                          ))}
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicCompany">
                                      <Form.Label className='fs-7 mb-1 theme-font'>Person Status</Form.Label>
                                      <Form.Select
                                          className='px-2 py-1 fs-7 theme-font text-muted'
                                          aria-label="Default select example"
                                          required={true}
                                          value={personStatus}
                                          disabled={departmentId === ''}
                                          onChange={(e) => setPersonStatus(e.target.value)}
                                      >
                                          <option value=''>Select Person Status</option>
                                          <option value='Full Time'>Full Time</option>
                                          <option value='Part Time'>Part Time</option>
                                          <option value='Contract'>Contract</option>
                                      </Form.Select>
                                  </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Group className="mb-2" controlId="formBasicFirstName">
                                      <Form.Label className='fs-7 mb-1 theme-font'>Check In Notes</Form.Label>
                                      <Form.Control
                                          className='px-2 py-1 fs-7'
                                          type="name"
                                          as="textarea" rows={2}
                                          value={checkOutNotes}
                                          placeholder="Lorem ipsum dolor sit amet consectetur. Nunc molestie nibh nulla mauris laoreet arcu. Quisque ultricies "
                                          onChange={(e) => setCheckOutNotes(e.target.value)}
                                          required={true}
                                      />
                                  </Form.Group>
                              </Col>
                              <Row>
                                  <Col md={6}>
                                      <Form.Group className="mb-2" controlId="formBasicFirstName">
                                          <Form.Label className='fs-7 mb-1 theme-font'>Digital Stamp</Form.Label>
                                          <p className='fs-7 theme-font'>I will not break, lose or sell this precious asset </p>
                                      </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                      <div className='d-flex justify-content-center border rounded mt-3'>
                                          <img src={bogus} height={145} width={145} alt=""/>
                                      </div>
                                  </Col>
                              </Row>
                          </Row>
                      </Form>
                      <br/>
                      <div className="d-flex justify-content-end w-100">
                          <button
                              type='button'
                              className='mx-2 border-0 reset-btn text-muted py-2 px-3 fs-7 theme-font rounded fs-7 d-flex align-items-center m-0'>
                             Cancel
                          </button>
                          <button
                              onClick={() => handleSubmit()}
                              type='button'
                              className='me-2 border-0 bg-theme-danger text-white py-2 px-3 fs-7 theme-font rounded fs-7 d-flex align-items-center m-0'>
                              Check In
                          </button>
                      </div>
                  </div>
              </Card.Body>
          </Card>
      </div>
  )
}
export default CheckInFormComponent;
