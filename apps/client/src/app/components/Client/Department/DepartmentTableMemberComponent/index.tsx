import {Dropdown, DropdownButton, Table} from "react-bootstrap";
import './department-table-member-component.scss'
import {AiOutlineEye} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {HiChevronUpDown} from "react-icons/hi2";
import {fetchDepartmentEmployees, useGlobalDispatch} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

interface filterProps {
  searchFilter: any;
}

const DepartmentTableMemberComponent = (props: filterProps) => {
    const dispatch = useGlobalDispatch();
    const router = useNavigate();
    const [originalData, setOriginalData] = useState<any>([])
    const [department, setDepartment] = useState<any>([])
    const [searchParams, setSearchParams] = useSearchParams();

    const getDepartment = () => {
        let id: any = searchParams.get('department_id')
        const formData: any = {
            department_id: JSON.parse(id)
        }
        try {
            dispatch(fetchDepartmentEmployees(formData)).then(async (res: any) => {
              if (res?.payload?.empolyee_details && Array.isArray(res.payload.empolyee_details)) {
                setOriginalData([...res.payload.empolyee_details]);
                setDepartment([...res.payload.empolyee_details]);
              }
            });
        } catch (err: any) {
            console.error(err);
        }
    }

    useEffect(() => {
        getDepartment()
    }, [])

    const applyFilters = () => {
      let filteredData = [...originalData];
      if (props.searchFilter !== '') {
        const searchLetter = props.searchFilter.toLowerCase();

        filteredData = filteredData.filter((res: any) => {
          const employeeName = res.employee_name.toLowerCase();
          return employeeName.includes(searchLetter);
        });
      }
      setDepartment(filteredData)
    }
    useEffect(() => {
      applyFilters()
    }, [props.searchFilter, originalData])
    return(
        <>
            <Table striped className='theme-font' id='departmentMemberTable'>
                <thead className='p-3'>
                <tr className='fs-7'>
                    <th><p className='p-2 m-0 fs-13'>DEPARTMENT MEMBERS<HiChevronUpDown size={18} className='ms-1' /></p></th>
                    <th><p className='p-2 m-0 fs-13'>MEMBERS ID<HiChevronUpDown size={18} className='ms-1' /></p></th>
                    <th><p className='p-2 m-0 fs-13'>MEMBERS EMAIL<HiChevronUpDown size={18} className='ms-1' /></p></th>
                    <th><p className='p-2 m-0 fs-13'>PHONE NUMBER<HiChevronUpDown size={18} className='ms-1' /></p></th>
                    <th><p className='p-2 m-0 fs-13 text-end'>ACTION</p></th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(department) && department?.map((item: any) => (
                    <tr>
                        <td>
                            <div className='d-flex align-items-center'>
                                <img src={item.image_url} alt="" width='38' height='38' className='rounded' />
                                <p className='m-0 ms-2 fs-7'>{item.employee_name}</p>
                            </div>
                        </td>
                        <td>
                            <div className='d-flex align-items-center'>
                                <p className='m-0 ms-2 fs-7'>{item.employee_id}</p>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <p className='m-0 ms-2 fs-7 text-muted'>{item.email}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className='d-flex align-items-center'>
                                    <p className='m-0 ms-2 fs-7 text-muted'>{item.phone}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='d-flex justify-content-end align-items-center'>
                                <AiOutlineEye className='me-2 mt-1' size={20} />
                                <DropdownButton
                                    className="bg-transparent custom-btn"
                                    id="dropdown-item-button"
                                    title={<BiDotsVerticalRounded className='me-2' size={20} />}
                                >
                                    <Dropdown.Item className='theme-font fs-7' as="button">Edit</Dropdown.Item>
                                    <Dropdown.Item className='theme-font fs-7' as="button">Delete</Dropdown.Item>
                                    <Dropdown.Item className='theme-font fs-7' as="button">De Active</Dropdown.Item>
                                    <Dropdown.Item className='theme-font fs-7' as="button">Active</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    )
}
export default DepartmentTableMemberComponent;
