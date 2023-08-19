import { Card } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { MdOutlineManageAccounts } from "react-icons/md";
import {useGlobalSelector} from "@infralastic/global-state";

const UserAboutComponent = () => {
  const { userInfo } = useGlobalSelector((state) => state.user);
  return (
        <Card className="shadow border-0">
            <Card.Body>
                <div className="theme-font">
                    <h5 className=" text-muted">About</h5>
                    <div>
                        <div className="">
                        <div className="theme-font"><span className="theme-danger"><BsPerson className="mx-1" size={18} /></span><span className='text-muted'>Full Name:</span> {userInfo?.result?.user_name ? userInfo?.result?.user_name : userInfo?.user_name}</div>
                        <div className="theme-font"><span className="theme-danger"><GoCheck className="mx-1" size={18} /></span><span className='text-muted'>Status:</span> Active</div>
                        <div className="theme-font"><span className="theme-danger"><MdOutlineManageAccounts className="mx-1" size={18}  /></span><span className='text-muted'> Role:</span> {userInfo?.result?.role_name ? userInfo?.result?.role_name : userInfo?.role_name}</div>
                        </div>
                    </div>
                    <br />
                    <div className="theme-font">
                    <h5 className="text-muted mb-1">Contact</h5>
                        <div>
                        <div className="theme-font"><span className="theme-danger"><AiOutlineMail size={18} className="mx-1"/></span>{userInfo?.result?.user_login ? userInfo?.result?.user_login : userInfo?.user_loginxx  }</div>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
export default UserAboutComponent;
