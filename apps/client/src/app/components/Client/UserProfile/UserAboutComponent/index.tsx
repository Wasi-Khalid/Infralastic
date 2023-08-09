import { Card } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GoCheck } from "react-icons/go";
import { MdOutlineManageAccounts } from "react-icons/md";

const UserAboutComponent = () => {
       
    
    return (
        <Card className="shadow border-0">
            <Card.Body>
        <div className="w-500 theme-font">
            <h6 className="text-muted">About</h6>
            <div>
                <div className="">
                <div className="theme-font"><span className="theme-danger "><BsPerson className="mx-1" /></span><span className='text-muted'>Full Name:</span> Sheraz Ahmad</div>
                <div className="theme-font"><span className="theme-danger"><GoCheck className="mx-1" /></span><span className='text-muted'>Status:</span> Active</div>
                <div className="theme-font"><span className="theme-danger"><MdOutlineManageAccounts className="mx-1" /></span><span className='text-muted'> Role:</span> IT Manager</div>
                </div>
            </div>
            <br />
            <div className="theme-font ">
            <h6 className="text-muted mb-1">Contact</h6>
                <div>
                <div className="theme-font"><span className="theme-danger"><AiOutlineMail className="mx-1"/></span>shehraz@infralastic.com</div>
                </div>
            </div>
        </div>
        </Card.Body>
        </Card>
        
    )
    }
    export default UserAboutComponent;