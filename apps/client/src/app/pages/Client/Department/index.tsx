import {Card, Form, InputGroup} from "react-bootstrap";
import {BiSearch} from "react-icons/bi";
import DepartmentTableComponent from "../../../components/Client/Department/DepartmentTableComponent";
import {BsPlus} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import './department.scss'
import {useState} from "react";
import {saveAs} from "file-saver";
import {useGlobalSelector} from "@infralastic/global-state";

const Department = () => {
  const router = useNavigate();
  const [department, setDepartment] = useState<any>('');
  const { departmentInfo } = useGlobalSelector((state) => state.department);

  function downloadCSV() {
    const csvData = departmentInfo?.departments_details?.map((item: any) =>
      Object.values(item).join(",")
    );
    const csvContent = csvData.join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "department.csv");
  }
  return(
      <>
          <Card className='rounded mt-4'>
              <Card.Body>
                  <div className='d-flex w-100 align-items-center py-2'>
                      <div className="w-100">
                          <h5 className='theme-font m-0'>DEPARTMENTS</h5>
                      </div>
                      <div className="w-100 d-flex justify-content-end">
                          <div className='w-100 d-flex justify-content-end'>
                              <InputGroup className="p-1 bg-white rounded border">
                                  <InputGroup.Text
                                      className='bg-white
                                      border-0'
                                      id="basic-addon1">
                                      <BiSearch size={22} />
                                  </InputGroup.Text>
                                  <input
                                      type='text'
                                      className='fs-7 border-0 w-100'
                                      placeholder="Search"
                                      aria-label="Username"
                                      onChange={(e: any) => setDepartment(e.target.value)}
                                  />
                              </InputGroup>
                          </div>
                          <div className='d-flex w-100 align-items-center justify-content-end'>
                              <button
                                className='bg-transparent border-0'
                                type='button'
                                onClick={() => downloadCSV()}
                              >
                                <h6 className='m-0 theme-font px-3'>Export</h6>
                              </button>
                              <button
                                  className='border-0 bg-theme-danger text-white py-1 px-2 theme-font rounded d-flex'
                                  onClick={() => router('/add-department')}
                              ><BsPlus size={24} className='m-0' /> Add&nbsp;New&nbsp;Department</button>
                          </div>
                      </div>
                  </div>
                  <hr className='mb-0'/>
                  <DepartmentTableComponent searchFilter={department} />
              </Card.Body>
          </Card>
      </>
  )
}
export default Department;
