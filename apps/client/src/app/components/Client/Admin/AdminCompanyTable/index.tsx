import {Dropdown, DropdownButton, Table} from "react-bootstrap";
import {HiChevronUpDown} from "react-icons/hi2";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {deleteCompany, getAllCompanies, useGlobalSelector} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import EditCompanyModal from "../../../Modals/EditCompanyModal";

const AdminCompanyTable = () => {
  const [data, setData] = useState<any>([]);
  const [show, setShow] = useState(false)
  const [editId, setEditId] = useState(false)
  const { userInfo } = useGlobalSelector((state) => state.user);
  const fetchCompanies = () => {
    const formData = {}
    getAllCompanies(formData).then((res: any) => {
      setData(res?.data?.result?.company_details)
    })
  }

  const handleDelete = (id: any) => {
    const formData: any = {
      company_id: id,
      user_id: userInfo?.result?.user_id
    }
    deleteCompany(formData).then((res: any) => {
      toast.success(res.data.result?.msg)
      fetchCompanies();
    })
  }

  function handleEdit(id: any){
    setEditId(id);
    setShow(!show)
  }

  useEffect(() => {
    fetchCompanies();
  }, [])
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
        {data?.map((item: any) => (
          <tr>
            <td>
              <h6 className='text-muted fs-7 m-0'>{item?.company_name}</h6>
            </td>
            <td>
              <h6 className='text-muted fs-7 m-0'>{item?.location_name}</h6>
            </td>
            <td>
              <h6 className='text-muted fs-7 m-0'>{item?.creater_name}</h6>
            </td>
            <td>
              <div className='d-flex justify-content-end align-items-center'>
                <DropdownButton
                  className="bg-transparent custom-btn"
                  id="dropdown-item-button"
                  title={<BiDotsVerticalRounded className='me-2' size={20} />}
                >
                  <Dropdown.Item onClick={() => handleEdit(item?.company_id)} className='theme-font fs-7' as="button">Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDelete(item?.company_id)} className='theme-font fs-7' as="button">Delete</Dropdown.Item>
                </DropdownButton>
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
      {show &&
        <EditCompanyModal show={show} hide={() => setShow(false)} id={editId} />
      }
    </div>
  )
}
export default AdminCompanyTable;
