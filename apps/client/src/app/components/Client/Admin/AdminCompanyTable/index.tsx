import {Dropdown, DropdownButton, Table} from "react-bootstrap";
import {HiChevronUpDown} from "react-icons/hi2";
import fakeUsr from "../../../../../assets/Avatar.png";
import {BiDotsVerticalRounded} from "react-icons/bi";

const AdminCompanyTable = () => {
  return(
    <div>
      <Table striped className='theme-font p-2' id='departmentTable'>
        <thead className='p-3'>
        <tr className='fs-7'>
          <th><p className='py-2 m-0 fs-13 text-uppercase'>Company Name<HiChevronUpDown size={18} className='ms-1' /></p></th>
          <th><p className='py-2 m-0 fs-13 text-uppercase'>Location<HiChevronUpDown size={18} className='ms-1' /></p></th>
          <th><p className='py-2 m-0 fs-13 text-uppercase'>Created By<HiChevronUpDown size={18} className='ms-1' /></p></th>
          <th><p className='py-2 m-0 fs-13 text-end'>ACTION</p></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <h6 className='text-muted fs-7 m-0'>IBM</h6>
          </td>
          <td>
            <h6 className='text-muted fs-7 m-0'>Georgia</h6>
          </td>
          <td>
            <h6 className='text-muted fs-7 m-0'>Admin</h6>
          </td>
          <td>
            <div className='d-flex justify-content-end align-items-center'>
              <DropdownButton
                className="bg-transparent custom-btn"
                id="dropdown-item-button"
                title={<BiDotsVerticalRounded className='me-2' size={20} />}
              >
                <Dropdown.Item className='theme-font fs-7' as="button">Edit</Dropdown.Item>
                <Dropdown.Item className='theme-font fs-7' as="button">Delete</Dropdown.Item>
              </DropdownButton>
            </div>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default AdminCompanyTable;
