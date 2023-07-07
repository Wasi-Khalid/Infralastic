import './employee-tree-component.scss';
import EmployeeCardComponent from "../EmployeeCardComponent";
import bogus from '../../../../../assets/employees/one.png'
import {fetchAllCompany, fetchCompanyEmployee, useGlobalDispatch} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {fetchAllEmployee, fetchManager} from "@infralastic/global-state";

interface filterInterface {
  searchFilter: any;
  location: any;
  company: any;
  department: any;
}
const EmployeeTreeComponent = (props: filterInterface) => {
    const dispatch = useGlobalDispatch();
    const [companyData, setCompanyData] = useState([])
    const [managerEmp, setManagerEmp] = useState(false)
    const [employeeEmp, setEmployeeEmp] = useState(false)
    const [employeeData, setEmployeeData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [managerEmployeeOriginalData, setManagerEmployeeOriginalData] = useState([]);
    const [managerEmployeeData, setManagerEmployeeData] = useState([]);
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
    const getEmployees = () => {
        const config: any = {}
        try {
            dispatch(fetchAllEmployee(config)).then(async (res: any) => {
                setOriginalData(res.payload.empolyee_details);
                setEmployeeData(res.payload.empolyee_details);
            });
        } catch (err: any) {
            console.error(err);
        }
    }
  const applyFilters = () => {
    let filteredData = [...originalData];

    if (props.searchFilter !== '') {
      const searchLetter = props.searchFilter.toLowerCase();

      filteredData = filteredData.filter((res: any) => {
        const employeeName = res.employee_name.toLowerCase();
        return employeeName.includes(searchLetter);
      });
    }
    if (props.department !== '') {
      filteredData = filteredData.filter((res: any) => res.department_name === props.department)
    }
    if (props.company !== '') {
      filteredData = filteredData.filter((res: any) => res.company_name === props.company)
    }
    if (props.location !== '') {
      filteredData = filteredData.filter((res: any) => res.location_name === props.location)
    }

    setEmployeeData(filteredData);

    let filteredManagerData = [...managerEmployeeOriginalData];

    if (props.searchFilter !== '') {
      const searchLetter = props.searchFilter.toLowerCase();

      filteredManagerData = filteredManagerData.filter((res: any) => {
        const employeeName = res.employee_name.toLowerCase();
        return employeeName.includes(searchLetter);
      });
    }
    if (props.department !== '') {
      filteredManagerData = filteredManagerData.filter((res: any) => res.department_name === props.department)
    }
    if (props.company !== '') {
      filteredManagerData = filteredManagerData.filter((res: any) => res.company_name === props.company)
    }
    if (props.location !== '') {
      filteredManagerData = filteredManagerData.filter((res: any) => res.location_name === props.location)
    }

    setManagerEmployeeData(filteredManagerData);
  }


  useEffect(() => {
    applyFilters()
  }, [props.searchFilter, props.department, props.company, props.location, originalData])

    const handleManager = ({id}: {id: any}) => {
        const formData: any = {
            employee_id: id
        }
        try {
            dispatch((fetchManager(formData))).then(async (res: any) => {
                if (res.payload.success === false) {
                    setManagerEmp(false)
                } else {
                    setManagerEmployeeOriginalData(res.payload.empolyee_details)
                    setManagerEmployeeData(res.payload.empolyee_details)
                    setManagerEmp(!managerEmp)

                }
            });

        } catch (err: any) {
            console.error(err);
        }
    }
    const handleEmployee = ({id}: {id: any}) => {
        const formData: any = {
            company_id: id
        }
        try {
            dispatch((fetchCompanyEmployee(formData))).then(async (res: any) => {
                if (res.payload.success === false) {
                    setManagerEmp(false)
                } else {
                    setOriginalData(res.payload.empolyee_details);
                    setEmployeeData(res.payload.empolyee_details)
                    setEmployeeEmp(!employeeEmp)
                }
            });

        } catch (err: any) {
            console.error(err);
        }
    }
    useEffect(() => {
        getCompany();
        // getEmployees();
    }, [])
  return(
      <div>
        <div className='d-flex flex-column'>
          <div className='d-flex justify-content-center'>
              {companyData?.map((item: any) => (
                  <EmployeeCardComponent
                      employee_id = {JSON.parse(item.company_id)}
                      name={item.company_name}
                      image={bogus}
                      handleClick={() => handleEmployee({id: JSON.parse(item.company_id)})}
                      designation='IT Company'
                  />
              ))}
          </div>
          <br/>
          <br/>
          {employeeEmp &&
            <div className='d-flex h-145 justify-content-start align-items-center'>
              {employeeData?.filter((res: any) => res.manager_name === false).map((item: any) => (
                <div>
                  <EmployeeCardComponent
                    employee_id={JSON.parse(item.employee_id)}
                    name={item.employee_name}
                    image={item.image_url}
                    handleClick={() => handleManager({id: JSON.parse(item.employee_id)})}
                    designation={item.job_title}
                  />
                </div>
              ))}
            </div>
          }
          <br/>
            {managerEmp &&
              <div className='d-flex overflow-auto justify-content-center h-145 align-items-center'>
                  {managerEmployeeData?.map((item: any) => (
                      <div>
                          <EmployeeCardComponent
                              employee_id={JSON.parse(item.employee_id)}
                              name={item.employee_name}
                              image={item.image_url}
                              handleClick={() => console.log('')}
                              designation={item.job_title}
                          />
                      </div>
                  ))}
              </div>
            }
      </div>
      </div>
  )
}
export default EmployeeTreeComponent;
