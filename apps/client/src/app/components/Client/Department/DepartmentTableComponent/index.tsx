import {Dropdown, DropdownButton, Table} from "react-bootstrap";
import './department-table-component.scss'
import laptop from '../../../../../assets/laptop.png';
import mouse from '../../../../../assets/mouse.png';
import computer from '../../../../../assets/computer.png';
import {AiOutlineEye} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {HiChevronUpDown} from "react-icons/hi2";
import {useAppDispatch} from "../../../../services/store/hooks";
import {fetchAllDepartment} from "../../../../services/store/actions/Department";
import {useEffect, useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";
import {deleteDepartment, deleteEmployee} from "../../../../services/api";
import {toast} from "react-toastify";

const DepartmentTableComponent = () => {
    const dispatch = useAppDispatch();
    const router = useNavigate();
    const [department, setDepartment] = useState<any>([])

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
    const delDepartment = async (id: any) => {
        const formData: any = {
            department_id: id
        }
        await deleteDepartment(formData).then((res: any) => {
            toast.info(res.data.result.msg);
        })
            .finally(() => {
           getDepartment();
        })
    }
    const editDepartment = async (id: any) => {
        router({
            pathname: '/add-department',
            search: `?${createSearchParams({
                department_id: id
            })}`
        })
    }

    useEffect(() => {
        getDepartment()
    }, [])
  return(
      <>
          <Table striped className='theme-font' id='departmentTable'>
              <thead className='p-3'>
              <tr className='fs-7'>
                  <th><p className='p-2 m-0 fs-13'>DEPARTMENT NAME<HiChevronUpDown size={18} className='ms-1' /></p></th>
                  <th><p className='p-2 m-0 fs-13'>DEPARTMENT HEAD<HiChevronUpDown size={18} className='ms-1' /></p></th>
                  <th><p className='p-2 m-0 fs-13'>WORKING ASSETS<HiChevronUpDown size={18} className='ms-1' /></p></th>
                  <th><p className='p-2 m-0 fs-13 text-end'>ACTION</p></th>
              </tr>
              </thead>
              <tbody>
              {department?.map((item: any) => (
                  <tr>
                      <td>
                          <div className='d-flex align-items-center'>
                              <img src={item.image_url} alt="" width='38' height='38' className='rounded' />
                              <p className='m-0 ms-2 fs-7'>{item.department_name}</p>
                          </div>
                      </td>
                      <td>
                          <div className="d-flex align-items-center">
                              {item?.manager_name ?
                              <div className='d-flex align-items-center'>
                                  <img src={item?.manager_image} alt="" width='34' height='34' className='rounded-circle' />
                                  <p className='m-0 ms-2 fs-7 text-muted'>{item.manager_name}</p>
                              </div> :
                                  <button className='bg-danger fs-7 text-white border-0 rounded px-2'>un-assigned</button>
                              }
                          </div>
                      </td>
                      <td>
                          <div className="d-flex align-items-center h-100">
                              <div className='d-flex align-items-center'>
                                  <div className='d-flex align-items-center px-3 br-1'>
                                      <img src={laptop} height='30' width='30' alt=""/>
                                      <p className='m-0 ms-1 fs-7 text-muted'>Laptop</p>
                                  </div>
                                  <div className='d-flex align-items-center px-3 br-1'>
                                      <img src={mouse} height='30' width='30' alt=""/>
                                      <p className='m-0 ms-1 fs-7 text-muted'>Mouse</p>
                                  </div>
                                  <div className='d-flex align-items-center px-3'>
                                      <img src={computer} height='30' width='30' alt=""/>
                                      <p className='m-0 ms-1 fs-7 text-muted'>Computer</p>
                                  </div>
                              </div>
                          </div>
                      </td>
                      <td>
                          <div className='d-flex justify-content-end align-items-center'>
                              <button
                                className='bg-transparent border-0'
                                onClick={() => router({
                                pathname: '/department-member',
                                search: `?${createSearchParams({
                                  department_id: item.department_id
                                })}`
                              })}><AiOutlineEye className='me-2 mt-1' size={20} />
                              </button>
                              <DropdownButton
                                  className="bg-transparent custom-btn"
                                  id="dropdown-item-button"
                                  title={<BiDotsVerticalRounded className='me-2' size={20} />}
                              >
                                  <Dropdown.Item onClick={() => editDepartment(item.department_id)} className='theme-font fs-7' as="button">Edit</Dropdown.Item>
                                  <Dropdown.Item onClick={() => delDepartment(item.department_id)} className='theme-font fs-7' as="button">Delete</Dropdown.Item>
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
export default DepartmentTableComponent;
