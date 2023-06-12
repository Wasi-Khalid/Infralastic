import {Dropdown, DropdownButton, Table} from "react-bootstrap";
import {HiChevronUpDown} from "react-icons/hi2";
import fakeUsr from "../../../../../assets/Avatar.png";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {getAllUser} from "@infralastic/global-state";
import {useEffect, useState} from "react";

const AdminUserTable = () => {
  const [data, setData] = useState<any>([])
  function fetchAllUsers() {
    const formData: any = {}
    getAllUser(formData).then((res: any) => {
      setData(res.data.result.role_details)
    })
  }

  useEffect(() => {
    fetchAllUsers();
  }, [])
  return(
    <Table striped className='theme-font p-2' id='departmentTable'>
      <thead className='p-3'>
      <tr className='fs-7'>
        <th><p className='py-2 m-0 fs-13 text-uppercase'>User Name<HiChevronUpDown size={18} className='ms-1' /></p></th>
        <th><p className='py-2 m-0 fs-13 text-uppercase'>Phone Number<HiChevronUpDown size={18} className='ms-1' /></p></th>
        <th><p className='py-2 m-0 fs-13 text-uppercase'>User Email<HiChevronUpDown size={18} className='ms-1' /></p></th>
        <th><p className='py-2 m-0 fs-13 text-uppercase'>Role Name<HiChevronUpDown size={18} className='ms-1' /></p></th>
        <th><p className='py-2 m-0 fs-13 text-uppercase'>Status<HiChevronUpDown size={18} className='ms-1' /></p></th>
        <th><p className='py-2 m-0 fs-13 text-end'>ACTION</p></th>
      </tr>
      </thead>
      <tbody>
      {data?.map((item: any) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img src={fakeUsr} alt="" width='38' height='38' className='rounded' />
              <div className='d-flex flex-column'>
                <p className='m-0 ms-2 fs-7'>{item?.user_name}</p>
                {/*<p className='m-0 ms-2 fs-8 text-muted'>Thinkpad</p>*/}
              </div>
            </div>
          </td>
          <td>
            <h6 className='text-muted fs-7 m-0'>(406) 555-0120</h6>
          </td>
          <td>
            <h6 className='text-muted fs-7 m-0'>{item?.email}</h6>
          </td>
          <td>
            <h6 className='text-muted fs-7 m-0'>{item?.role_name}</h6>
          </td>
          <td>
            <button className='bg-success fs-7 text-white border-0 rounded px-2'>Assigned</button>
          </td>
          <td>
            <div className='d-flex justify-content-end align-items-center'>
              <DropdownButton
                className="bg-transparent custom-btn "
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
  )
}
export default AdminUserTable;
