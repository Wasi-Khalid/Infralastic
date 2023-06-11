import './company-setting-table.scss';
import {Card, Dropdown} from "react-bootstrap";
import {GoSettings} from "react-icons/go";
import {BsPlus} from "react-icons/bs";
import {useState} from "react";
import AdminCompanyTable from "../AdminCompanyTable";

const CompanySettingTable = () => {
  const [companyForm, setCompanyForm] = useState(false);
  return(
    <div>
      <div>
        <Card>
          <Card.Body>
            <div className="d-flex align-items-center theme-font p-2">
              <p className='theme-font mb-0 mx-3'>Companies</p>
              <input type="text" className='form-control p-2 px-3 fs-7 mx-2' placeholder='Search' />
              <Dropdown>
                <Dropdown.Toggle className='bg-transparent border-0 p-0 me-2' id="dropdown-basic">
                  <button
                    className='px-3 py-1 text-white border-0 bg-gray h-34 rounded mx-2'
                  >
                    <GoSettings size={20} />
                  </button>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className='theme-font fs-7'>Request</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                <button
                  className='px-2 pe-3 text-white border-0 bg-theme-danger rounded d-flex h-34 align-items-center'
                  onClick={() => setCompanyForm(true)}
                >
                  <BsPlus size={20} className='me-2' />Add&nbsp;New&nbsp;Company
                </button>
            </div>
            <hr className='mt-3 mb-0'/>
            <AdminCompanyTable />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
export default CompanySettingTable;
