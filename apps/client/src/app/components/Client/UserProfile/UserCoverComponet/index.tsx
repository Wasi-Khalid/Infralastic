import { useNavigate } from "react-router-dom";
import "./user-cover.scss"
import coverImg from "../../../../../assets/UserCover.png"
import UserImg from "../../../../../assets/UserAvater.png"
import { BiEdit } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import {useGlobalSelector} from "@infralastic/global-state";

const UserCoverComponent = () => {
  const router = useNavigate();
  const { userInfo } = useGlobalSelector((state) => state.user);


  return (
        <div className="w-100 background-cover my-3 shadow border-0">
            <div className="w-100 position-relative cover-edit d-flex justify-content-end theme-danger"> <BiEdit size={24} /></div>
            <div className="w-100">
                <img className="w-100" src={coverImg} alt="" height={'347'} />
            </div>
            <div className="d-flex">
                <div className="user-img">
                    <img src={UserImg} alt="" />
                </div>
                <div className="d-flex flex-column">
                    <div>
                        <h3 className="theme-font">{userInfo?.result?.user_name}</h3>
                    </div>
                  <div className="d-flex">
                  <div className="theme-font d-flex align-item-center px-2">
                        <div className="theme-font"><MdManageAccounts size={20} className='mx-1'/>{userInfo?.result?.role_name}</div>
                    </div>
                    <div className="theme-font d-flex align-item-center px-2">
                        <div className="theme-font"><CiCalendarDate size={20} className='mx-1' /> Joined Date April,2021</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
)
}
export default UserCoverComponent;

