import { useNavigate } from "react-router-dom";
import "./user-cover.scss"
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
                <img className="w-100" src={userInfo?.result?.cover_url ? userInfo?.result?.cover_url : userInfo?.cover_url} alt="" height={'347'} />
            </div>
            <div className="d-flex">
                <div className="user-img">
                    <img src={userInfo?.result?.image_url ? userInfo?.result?.image_url : userInfo?.image_url} className='shadow-lg' width='147' height='147' alt="" />
                </div>
                <div className="d-flex w-100">
                  <div className="d-flex w-75 flex-column p-3">
                      <div>
                          <h3 className="theme-font px-2 text-uppercase">{userInfo?.result?.user_name ? userInfo?.result?.user_name : userInfo?.user_name}</h3>
                      </div>
                    <div className="d-flex">
                    <div className="theme-font d-flex align-item-center px-2">
                          <div className="theme-font"><MdManageAccounts size={18} className='mx-1'/>{userInfo?.result?.role_name ? userInfo?.result?.role_name : userInfo?.role_name}</div>
                      </div>
                      <div className="theme-font d-flex align-item-center px-2">
                          <div className="theme-font"><CiCalendarDate size={18} className='mx-1' /> Joined Date {userInfo?.result?.create_date ? userInfo?.result?.create_date : userInfo?.create_date}</div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex w-25 justify-content-end mx-3 align-items-center">
                    <button
                      className='bg-theme-danger text-white border-0 px-3 py-2 rounded'
                      onClick={() => router('/edit-profile')}
                    >Edit Profile</button>
                  </div>
                </div>
            </div>
        </div>
)
}
export default UserCoverComponent;

