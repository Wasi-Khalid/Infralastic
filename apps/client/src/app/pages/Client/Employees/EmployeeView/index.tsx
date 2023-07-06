import './employee-view.scss'
import EmployeesFilterComponent from "../../../../components/Client/Employees/EmployeesFilterComponent";
import EmployeeTreeComponent from "../../../../components/Client/Employees/EmployeeTreeComponent";
import {useState} from "react";
const EmployeeView = () => {
  const [search, setSearch] = useState('');
  const [location , setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [department, setDepartment] = useState('');
  return(
        <div className='h-100 w-100'>
                <br/>
                <div className='d-flex justify-content-center w-100'>
                    <EmployeesFilterComponent
                      searchData={(e: any) => setSearch(e)}
                      location={(e: any) => setLocation(e)}
                      company={(e: any) => setCompany(e)}
                      department={(e: any) => setDepartment(e)}
                    />
                </div>
                <br/>
                <br/>
                <div className="">
                    <div className='h-100'>
                        <EmployeeTreeComponent
                          searchFilter={search}
                          location={location}
                          department={department}
                          company={company}
                        />
                    </div>
                </div>
        </div>
    )
}
export default EmployeeView;
