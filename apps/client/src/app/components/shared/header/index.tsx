import './header.scss'
import {InputGroup, Form, DropdownButton, Dropdown} from "react-bootstrap";
import {BiBell, BiSearch} from "react-icons/bi";
import {IoBasketOutline} from "react-icons/io5";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {CiHeadphones} from "react-icons/ci";
import avatar from '../../../../assets/Avatar.png'
import {useNavigate} from "react-router-dom";

const HeaderComponent = () => {
  const router = useNavigate();
  const logout = async () => {
    localStorage.clear();
    await router("/login");
  };


  return(
      <div>
          <div className='d-flex w-100'>
              <div className='w-100 d-flex align-items-center'>
                  <div className='d-flex align-items-center'>
                      <h4 className='fw-light header-color'>Monday, <span className='theme-danger'>March 13th</span> . <span className='theme-danger'>9:53PM</span></h4>
                  </div>
              </div>
              <div className="d-flex justify-content-end w-100">
                  <div className='ps-5 custom-width'>
                      <InputGroup className="shadow p-2 bg-white rounded">
                          <InputGroup.Text
                              className='bg-white border-0'
                              id="basic-addon1">
                              <BiSearch size={22} />
                          </InputGroup.Text>
                          <Form.Control
                              className='header-input border-0'
                              placeholder="Search your assets"
                              aria-label="Username"
                          />
                      </InputGroup>
                  </div>
                  <div className='px-3'>
                      <div className="shadow d-flex bg-white rounded p-2">
                          <button className='bg-transparent border-0'>
                            <div className='d-flex justify-content-end'>
                              {/*<p className='m-0 bg-theme-danger text-white rounded-circle position-absolute px-1 fs-7'>{cartLength}</p>*/}
                            </div>
                            <IoBasketOutline className='my-1 mx-2' size={26}/>
                          </button>
                          <AiOutlineAppstoreAdd className='my-1 mx-2' size={26} />
                      </div>
                  </div>
                  <div className='px-2'>
                  <div className="shadow d-flex bg-white rounded p-2">
                      <CiHeadphones className='my-1 mx-2' size={26}/>
                      <BiBell className='my-1 mx-2' size={26} />
                      <DropdownButton
                          className="bg-transparent custom-btn"
                          id="dropdown-item-button"
                          title={<img className='mx-2 rounded-circle bg-theme-danger' src={avatar} width={32} height={32} alt=""/>}
                      >
                          <Dropdown.Item className='theme-font' as="button">My Profile</Dropdown.Item>
                          <Dropdown.Item className='theme-font' as="button">Setting</Dropdown.Item>
                          <hr className='m-1'/>
                          <Dropdown.Item className='theme-font' as="button">Setting</Dropdown.Item>
                          <Dropdown.Item onClick={() => logout()}
                              className="theme-danger theme-font fw-semibold"
                              as="button"
                          >
                              Logout
                          </Dropdown.Item>
                      </DropdownButton>
                  </div>
              </div>
              </div>
          </div>
      </div>
  )
}
export default HeaderComponent;
