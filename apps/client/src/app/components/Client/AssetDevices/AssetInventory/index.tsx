import './asset-inventory.scss';
import {Card, Dropdown, DropdownButton, Form, InputGroup, Table} from "react-bootstrap";
import {HiChevronUpDown} from "react-icons/hi2";
import laptop from "../../../../../assets/laptop.png";
import {AiOutlineEye} from "react-icons/ai";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {HiFilter} from "react-icons/hi";
import {BsPlus} from "react-icons/bs";
import {fetchAllDepartment} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {createSearchParams, useNavigate } from "react-router-dom";
import {
    deleteAsset,
    getAllAssets,
    getAllCategories,
    getSites
} from "@infralastic/global-state";
import {toast} from "react-toastify";
import {useGlobalDispatch} from "@infralastic/global-state";
import {LuSettings2} from "react-icons/lu";

const AssetInventory = () => {
    const dispatch = useGlobalDispatch();
    const router = useNavigate();
    const [page, setPage] = useState<number>(1)
    const [department, setDepartment] = useState<any>([]);
    const [location, setLocation] = useState<any>([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [assets, setAssets] = useState<any>([]);
    const [originalData, setOriginalData] = useState<any>([])
    const [categoryData, setCategoryData] = useState<any>([]);
    const [showEntries, setShowEntries] = useState<number>(10); // Number of entries to show
    const startIndex = (page - 1) * showEntries;
    const endIndex = startIndex + showEntries;
    const slicedData = assets.slice(startIndex, endIndex);
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

    function fetchAssets() {
        const formData: any = {
            company_id: 1,
            page_no: page
        }
        getAllAssets(formData).then((res: any) => {
            setAssets(res.data.result.asset_details);
            setOriginalData(res.data.result.asset_details);
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

    const getAllCategory = () => {
        const formData: any = {
            company_id: 1
        }
        getAllCategories(formData).then((res: any) => {
            setCategoryData(res.data.result.asset_details)
        })
    }

  useEffect(() => {
    applyFilters();
  }, [categoryFilter, locationFilter]);
  const applyFilters = () => {
    setAssets((prevAssets: any) => {
      let filteredData = [...originalData];

      if (categoryFilter !== '') {
        filteredData = filteredData.filter((res) => res.category_name === categoryFilter);
      }

      if (locationFilter !== '') {
        filteredData = filteredData.filter((res) => res.state_name === locationFilter);
      }

      return filteredData;
    });
  };

  const filterCategory = (value: any) => {
    if (value === '') {
      setAssets(originalData)
    }
    setCategoryFilter(value);
    applyFilters();
  };

  const filterLocation = (value: any) => {
    if (value === '') {
      setAssets(originalData)
    }
    setLocationFilter(value);
    applyFilters();
  };

    useEffect(() => {
        getDepartment();
        fetchSites();
        getAllCategory();
    }, [])

    useEffect(() => {
        fetchAssets();
    }, [page])

    const handleShowEntriesChange = (e: any) => {
      const value = parseInt(e.target.value, 10);
      setShowEntries(value);
    };

    const handlePageChange = (direction: string) => {
      setPage((prevPage) => {
        if (direction === "next") {
          return prevPage + 1;
        } else if (direction === "prev" && prevPage > 1) {
          return prevPage - 1;
        }
        return prevPage;
      });
    };
    return(
        <>
            <Card>
                <Card.Body>
                    <div className='d-flex w-100'>
                        <div className='d-flex align-items-center w-25'>
                            <h6 className='m-0 text-muted fs-7'>Show</h6>
                          <input
                            type="number"
                            className='w-25 ms-2 border-1'
                            min="1"
                            value={showEntries}
                            onChange={handleShowEntriesChange}
                          />
                          <h6 className='m-0 ms-2 text-muted fs-7'>Entries</h6>
                        </div>
                        <div className="d-flex justify-content-end align-items-center w-75">
                            <Form.Group className="py-1 mx-2" controlId="location">
                                <InputGroup className="py-1">
                                    <InputGroup.Text id="basic-addon1" className='bg-transparent px-2'><HiFilter className='me-1 theme-danger'/></InputGroup.Text>
                                    <Form.Select
                                        className='py-1 ps-0 fs-7 theme-font text-muted border-start-0 '
                                        aria-label="Default select example"
                                        required={true}
                                        value={locationFilter}
                                        onChange={(e: any) => filterLocation(e.target.value)}
                                    >
                                        <option onClick={() => setAssets(originalData)} value=''>Select Location</option>
                                        {location?.map((item: any) => (
                                            <option value={item.state_name} className='theme-font fs-7'>{item?.state_name}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="py-1 mx-2" controlId="category">
                                <InputGroup className="py-1">
                                    <InputGroup.Text id="basic-addon2" className='bg-transparent px-2'><HiFilter className='me-1 theme-danger'/></InputGroup.Text>
                                    <Form.Select
                                        className='py-1 ps-0 fs-7 theme-font text-muted border-start-0 '
                                        aria-label="Default select example"
                                        required={true}
                                        value={categoryFilter}
                                        onChange={(e: any) => filterCategory(e.target.value)}
                                    >
                                        <option onClick={() => setAssets(originalData)} value=''>Select Category</option>
                                        {categoryData?.map((item: any) => (
                                            <option value={item.categ_name} className='theme-font fs-7'>{item.categ_name}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="py-1 mx-2" controlId="department">
                                <InputGroup className="py-1">
                                    <InputGroup.Text id="basic-addon3" className='bg-transparent px-2'><HiFilter className='me-1 theme-danger'/></InputGroup.Text>
                                    <Form.Select
                                        className='py-1 ps-0 fs-7 theme-font text-muted border-start-0 '
                                        aria-label="Default select example"
                                        required={true}
                                    >
                                        <option onClick={() => setAssets(originalData)} value=''>Select Department</option>
                                        {department?.map((item: any) => (
                                            <option value={item.department_id} className='theme-font fs-7'>{item.department_name}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                            <Dropdown>
                                <Dropdown.Toggle className='bg-transparent border-0 p-0 me-2' id="dropdown-basic">
                                    <button
                                        className='px-3 py-1 text-white border-0 bg-gray h-34 rounded mx-2'
                                    >
                                        <LuSettings2 size={20} />
                                    </button>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className='theme-font fs-7'>Request</Dropdown.Item>
                                    <Dropdown.Item className='theme-font fs-7'>Damage Report</Dropdown.Item>
                                    <Dropdown.Item className='theme-font fs-7'>Perform Maintenance</Dropdown.Item>
                                    <Dropdown.Item className='theme-font fs-7'>Assets Audit</Dropdown.Item>
                                    <Dropdown.Item href='/confirm-assets' className='theme-font fs-7'>Confirmation</Dropdown.Item>
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
                        {slicedData?.map((asset: any) => (
                            <tr>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <img src={asset?.image_url} alt="" width='38' height='38' className='rounded' />
                                        <div className='d-flex flex-column'>
                                            <p className='m-0 ms-2 fs-7'>{asset.asset_name}</p>
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
                                            <p className='m-0 ms-2 fs-7 text-muted'>{asset.employee_name}</p>
                                        </div> :
                                        <button className='bg-danger fs-7 text-white border-0 rounded px-2'>un-assigned</button>
                                    }
                                </td>
                                <td>
                                    <h6 className='text-muted fs-7 m-0'>{asset.state_name}</h6>
                                </td>
                                <td>
                                    {asset?.employee_id ?
                                        <button className='bg-success fs-7 text-white border-0 rounded px-2'>Assigned</button>
                                        :
                                        <button className='bg-warning fs-7 text-white border-0 rounded px-2'>Un-assigned</button>
                                    }
                                </td>
                                <td>
                                    <div className='d-flex justify-content-end align-items-center'>
                                        <button className='bg-transparent border-0'>
                                          <AiOutlineEye onClick={() => {
                                          router({
                                            pathname: '/asset-view',
                                            search: `?${createSearchParams({
                                              asset_unique_id: asset?.asset_unique_id
                                            })}`
                                          })}} className='me-2 mt-1' size={20} />
                                        </button>
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
                          <div className="pagination">
                            <button
                              className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'
                              onClick={() => handlePageChange("prev")} disabled={page === 1}>
                              Prev
                            </button>
                            <button
                              className='px-3 py-1 text-white border-0 bg-gray fs-7 h-34 rounded mx-1 pagination-hover'
                              onClick={() => handlePageChange("next")} disabled={assets.length <= showEntries || assets.length <= page * showEntries}>
                              Next
                            </button>
                          </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
export default AssetInventory;
