import './employee-view.scss'
import EmployeesFilterComponent from "../../../../components/Client/Employees/EmployeesFilterComponent";
import EmployeeTreeComponent from "../../../../components/Client/Employees/EmployeeTreeComponent";
const EmployeeView = () => {
    return(
        <div className='h-100 w-100'>
                <br/>
                <div className='d-flex justify-content-center w-100'>
                    <EmployeesFilterComponent />
                </div>
                <br/>
                <br/>
                <div className="">
                    <div className='h-100'>
                        <EmployeeTreeComponent />
                    </div>
                </div>
        </div>
    )
}
export default EmployeeView;