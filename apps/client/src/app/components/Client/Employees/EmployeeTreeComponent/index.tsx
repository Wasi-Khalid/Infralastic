import './employee-tree-component.scss';
import EmployeeCardComponent from "../EmployeeCardComponent";
import bogus from '../../../../../assets/employees/one.png'
import {fetchAllCompany, fetchCompanyEmployee, useGlobalDispatch} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {fetchAllEmployee, fetchManager} from "@infralastic/global-state";

const EmployeeTreeComponent = () => {
    const dispatch = useGlobalDispatch();
    const [companyData, setCompanyData] = useState([])
    const [managerEmp, setManagerEmp] = useState(false)
    const [employeeData, setEmployeeData] = useState([])
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
                setEmployeeData(res.payload.empolyee_details)
            });
        } catch (err: any) {
            console.error(err);
        }
    }

    const handleManager = ({id}: {id: any}) => {
        const formData: any = {
            employee_id: id
        }
        try {
            dispatch((fetchManager(formData))).then(async (res: any) => {
                if (res.payload.success === false) {
                    setManagerEmp(false)
                } else {
                    setManagerEmployeeData(res.payload.empolyee_details)
                    setManagerEmp(!managerEmp)

                }
            });

        } catch (err: any) {
            console.error(err);
        }
    }
    useEffect(() => {
        getCompany();
        getEmployees();
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
                      handleClick={() => console.log('')}
                      designation='IT Company'
                  />
              ))}
          </div>
          <br/>
          <br/>
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
