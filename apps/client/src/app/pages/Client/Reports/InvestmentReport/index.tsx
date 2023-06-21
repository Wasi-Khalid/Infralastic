import {Button, Card, Dropdown, DropdownButton, Table} from "react-bootstrap";
import {AiOutlineDownload} from "react-icons/ai";
import {HiChevronUpDown} from "react-icons/hi2";
import bogus from "../../../../../assets/Facebook.png";
import {BiDotsVerticalRounded} from "react-icons/bi";

const InvestmentReport= () => {
  return(
    <>
      <br/>
      <Card>
        <Card.Body>
          <div className='d-flex w-100 p-2'>
            <div className='d-flex align-items-center w-25'>
              <h5 className='m-0 theme-font'>Investment Report</h5>
            </div>
            <div className="w-75 d-flex justify-content-end">
              <div>
                <input placeholder='Search' type="search" className='form-control'/>
              </div>
              <div className='mx-2'>
                <Button variant={"secondary"}>
                  <AiOutlineDownload size={20} />
                </Button>
              </div>
            </div>
          </div>
          <hr className='m-0 mt-3'/>
          <Table striped className='theme-font' id='departmentTable'>
            <thead className='p-3'>
            <tr className='fs-7'>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>Item<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>Date<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>ACTION<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>serial Number<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13 text-uppercase'>Assigned to<HiChevronUpDown size={18} className='ms-1' /></p></th>
              <th><p className='py-2 m-0 fs-13'>ACTION</p></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img src={bogus} alt="" width='38' height='38' className='rounded' />
                  <div className='d-flex flex-column'>
                    <p className='m-0 ms-2 fs-7'>Lenovo</p>
                  </div>
                </div>
              </td>
              <td>
                <h6 className='text-muted fs-7 m-0'>Fri Apr 14, 2023 7:36AM</h6>
              </td>
              <td>
                <h6 className='text-muted fs-7 m-0'>Checkout</h6>
              </td>
              <td>
                <h6 className='text-muted fs-7 m-0'>2659952946187415</h6>
              </td>
              <td>
                <div className='d-flex align-items-center'>
                  <img src={bogus} alt="" width='32' height='32' className='rounded-circle' />
                  <p className='m-0 ms-2 fs-7 text-muted'>Joseph Wheeler</p>
                </div>
              </td>
              <td>
                <button className='bg-success fs-7 text-white border-0 rounded px-2'>Assigned</button>
              </td>
              <td>
                <div className='d-flex justify-content-end align-items-center'>
                  <button className='bg-transparent border-0'>
                    <AiOutlineDownload className='me-2 mt-1' size={20} />
                  </button>
                  <DropdownButton
                    className="bg-transparent custom-btn"
                    id="dropdown-item-button"
                    title={<BiDotsVerticalRounded className='me-2' size={20} />}
                  >
                    <Dropdown.Item className='theme-font fs-7' as="button">Archive</Dropdown.Item>
                    <Dropdown.Item className='theme-font fs-7' as="button">Letigation Hold</Dropdown.Item>
                    <Dropdown.Item className='theme-font fs-7' as="button">Cyber Investigation</Dropdown.Item>
                  </DropdownButton>
                </div>
              </td>
            </tr>
            </tbody>
          </Table>
          <hr/>
          <div className="d-flex w-100">
            <div className='w-100'>
              <h6 className='fs-8 theme-font text-muted m-0'>Showing 1 to 7 of 100 entries</h6>
            </div>
            <div className='w-100 d-flex justify-content-end'>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>Previous</button>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>1</button>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>2</button>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>3</button>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>4</button>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>5</button>
              <button className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'>Next</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default InvestmentReport
