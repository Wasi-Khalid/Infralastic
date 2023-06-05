import './asset-table.scss';
import {Card, Dropdown, DropdownButton, Table} from "react-bootstrap";
import {HiChevronUpDown} from "react-icons/hi2";
import laptop from "../../../../../assets/laptop.png";
import {AiOutlineEye} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {HiFilter} from "react-icons/hi";
import {GoSettings} from "react-icons/go";
import {BsPlus} from "react-icons/bs";
import {useEffect, useState} from "react";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {deleteAsset, getAssetBySite, getSites, fetchAllDepartment, useGlobalDispatch} from "@infralastic/global-state";
import {toast} from "react-toastify";

const AssetTable = () => {
    const dispatch = useGlobalDispatch();
    const router = useNavigate()
    const [department, setDepartment] = useState<any>([]);
    const [location, setLocation] = useState<any>([]);
    const [assets, setAssets] = useState<any>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id: any = searchParams.get('site_id');
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
    function fetchSites() {
        const formData: any = {
            company_id: 1
        }
        getSites(formData).then((res: any) => {
            setLocation(res.data.result.site_details)
        })
    }

    function fetchAssetsBySite() {
        const formData: any = {
            site_id: JSON.parse(id)
        }
        getAssetBySite(formData).then((res: any) => {
            setAssets(res.data.result.asset_details)
        })
    }

    function handleDelete(id: any) {
        const formData: any = {
            asset_unique_id: id
        }
        deleteAsset(formData).then((res: any) => {
            toast.success(res.data.result.msg)
            setTimeout(() => {
                window.location.reload();
            }, 3000)
        })
    }

    useEffect(() => {
        getDepartment();
        fetchSites();
        fetchAssetsBySite();
    }, [])
  return(
      <>
          <Card>
              <Card.Body>
                  <div className='d-flex w-100'>
                      <div className='d-flex align-items-center w-25'>
                            <h6 className='m-0 text-muted fs-7'>Show</h6>
                            <input type="text" className='w-25 ms-2 border-1'/>
                            <h6 className='m-0 ms-2 text-muted fs-7'>Entries</h6>
                        </div>
                      <div className="d-flex justify-content-end align-items-center w-75">
                          <DropdownButton
                              className='bg-white rounded py-1 theme-font mx-2'
                              id="asset-dropdown"
                              variant='white'
                              title={<span className='m-0 d-flex align-items-center'><HiFilter className='me-1 theme-danger'/> Select Location</span>}
                          >
                              {location?.map((item: any) => (
                                  <Dropdown.Item className='theme-font fs-7' href="">{item?.state_name}</Dropdown.Item>
                              ))}
                          </DropdownButton>
                          <DropdownButton
                              className='bg-white rounded py-1 theme-font mx-2'
                              id="asset-dropdown"
                              variant='white'
                              title={<span className='m-0 d-flex align-items-center'><HiFilter className='me-1 theme-danger'/> Select Asset</span>}
                          >
                              <Dropdown.Item className='theme-font fs-7' href="">Desktop</Dropdown.Item>
                              <Dropdown.Item className='theme-font fs-7' href="">Laptop</Dropdown.Item>
                              <Dropdown.Item className='theme-font fs-7' href="">Mobile</Dropdown.Item>
                              <Dropdown.Item className='theme-font fs-7' href="">Tablet</Dropdown.Item>
                          </DropdownButton>
                          <DropdownButton
                              className='bg-white rounded py-1 theme-font mx-2'
                              id="asset-dropdown"
                              variant='white'
                              title={<span className='m-0 d-flex align-items-center'><HiFilter className='me-1 theme-danger'/> Select Department</span>}
                          >
                              {department?.map((item: any) => (
                                  <Dropdown.Item className='theme-font fs-7' id={item.department_id} href="">{item.department_name}</Dropdown.Item>
                              ))}
                          </DropdownButton>
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
                                  <Dropdown.Item className='theme-font fs-7'>Damage Report</Dropdown.Item>
                                  <Dropdown.Item className='theme-font fs-7'>Repair</Dropdown.Item>
                                  <Dropdown.Item className='theme-font fs-7'>Perform Maintenance</Dropdown.Item>
                                  <Dropdown.Item className='theme-font fs-7'>Assets Audit</Dropdown.Item>
                                  <Dropdown.Item className='theme-font fs-7'>Import Data</Dropdown.Item>
                              </Dropdown.Menu>
                          </Dropdown>
                          <button
                              className='px-2 pe-3 py-1 text-white border-0 bg-theme-danger h-34 rounded d-flex align-items-center'
                              onClick={() => router('/add-asset')}
                          >
                              <BsPlus size={20} className='me-2' />Add New
                          </button>
                      </div>
                  </div>
                  <hr className='m-0 mt-3'/>
                  <Table striped className='theme-font' id='departmentTable'>
                      <thead className='p-3'>
                          <tr className='fs-7'>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>ASSETS<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>ASSETS ID<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>CATEGORY<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>serial Number<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>Assigned to<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>Location<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-uppercase'>Status<HiChevronUpDown size={18} className='ms-1' /></p></th>
                              <th><p className='py-2 m-0 fs-13 text-end'>ACTION</p></th>
                          </tr>
                      </thead>
                      <tbody>
                      {assets?.map((asset: any) => (
                          <tr>
                              <td>
                                  <div className='d-flex align-items-center'>
                                      <img src={asset?.image_url} alt="" width='38' height='38' className='rounded' />
                                      <div className='d-flex flex-column'>
                                          <p className='m-0 ms-2 fs-7'>{asset.asset_name}</p>
                                          {/*<p className='m-0 ms-2 fs-8 text-muted'>Thinkpad</p>*/}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <h6 className='text-muted fs-7 m-0'>{asset?.asset_id}</h6>
                              </td>
                              <td>
                                  <div className='d-flex align-items-center'>
                                      <img src={laptop} alt="" width='24' height='24' className='rounded-circle' />
                                      <p className='m-0 ms-2 fs-7 text-muted'>{asset.category_name}</p>
                                  </div>
                              </td>
                              <td>
                                  <h6 className='text-muted fs-7 m-0'>{asset.serial_number}</h6>
                              </td>
                              <td>
                                  {asset?.employee_id ?
                                      <div className='d-flex align-items-center'>
                                          <img src={asset.employee_image} alt="" width='32' height='32' className='rounded-circle' />
                                          <p className='m-0 ms-2 fs-7 text-muted'>Joseph Wheeler</p>
                                      </div> :
                                      <button className='bg-danger fs-7 text-white border-0 rounded px-2'>un-assigned</button>
                                  }
                              </td>
                              <td>
                                  <h6 className='text-muted fs-7 m-0'>{asset.site_name}</h6>
                              </td>
                              <td>
                                  {asset?.employee_id ?
                                      <button className='bg-success fs-7 text-white border-0 rounded px-2'>Assigned</button>
                                      :
                                      <button className='bg-warning fs-7 text-white border-0 rounded px-2'>Un-assigned</button>
                                  }                              </td>
                              <td>
                                  <div className='d-flex justify-content-end align-items-center'>
                                      <AiOutlineEye onClick={() => {
                                        router({
                                          pathname: '/asset-view',
                                          search: `?${createSearchParams({
                                            asset_unique_id: asset?.asset_unique_id
                                          })}`
                                        })}
                                      } className='me-2 mt-1' size={20} />
                                      <DropdownButton
                                          className="bg-transparent custom-btn"
                                          id="dropdown-item-button"
                                          title={<BiDotsVerticalRounded className='me-2' size={20} />}
                                      >
                                          <Dropdown.Item className='theme-font fs-7' as="button">Archive</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleDelete(JSON.parse(asset?.asset_unique_id))} className='theme-font fs-7' as="button">Delete</Dropdown.Item>
                                          <Dropdown.Item className='theme-font fs-7' as="button">Letigation Hold</Dropdown.Item>
                                          <Dropdown.Item className='theme-font fs-7' as="button">Cyber Investigation</Dropdown.Item>
                                      </DropdownButton>
                                  </div>
                              </td>
                          </tr>
                      ))}
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
export default AssetTable;
