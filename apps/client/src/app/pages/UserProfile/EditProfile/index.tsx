import { Card, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {
  addAdminUser,
  getAllRoles,
  getUserById,
  updateAdminUser,
  useGlobalDispatch,
  useGlobalSelector, userUpdate
} from "@infralastic/global-state";
import {toast} from "react-toastify";
import {BsCloudUpload} from "react-icons/bs";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../../services/config/firebase";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
  const dispatch = useGlobalDispatch();
  const router = useNavigate();
  const [roles, setRoles] = useState<any>('');
  const [roleData, setRoleData] = useState<any>([]);
  const [userName, setUserName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [userFile, setUserFile] = useState<any>(null);
  const [coverFile, setCoverFile] = useState<any>(null);
  const [userImage, setUserImage] = useState<any>('');
  const [coverImage, setCoverImage] = useState<any>('');
  const { userInfo } = useGlobalSelector((state) => state.user);


  function fetchUserById(){
    const formData = {
      user_id: userInfo?.result?.user_id ? userInfo?.result?.user_id : userInfo?.user_id
    }
    getUserById(formData).then((res: any) => {
      setUserName(res.data.result.user_name)
      setEmail(res.data.result.email)
      setPhone(res.data.result.phone)
      setUserImage(res.data.result.image_url)
      setCoverImage(res.data.result.cover_url)
      setRoles(res.data.result.role_id)
    })
  }


  const fetchRoles = () => {
    const config = {}
    getAllRoles(config).then((res) => {
      setRoleData(res.data.result.role_details)
    })
  }

  const imageHandler = (e:any) => {
    setUserFile(e.target.files[0]);
    setUserImage(URL.createObjectURL(e.target.files[0]));
  }
  const coverHandler = (e:any) => {
    setCoverFile(e.target.files[0]);
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  }
  // function handleSubmit() {
  //   const formData = {
  //     name: userName,
  //     login: email,
  //     password: password,
  //     phone: phone,
  //     role_id: JSON.parse(roles),
  //     user_id: userInfo?.result?.user_id
  //   }
  //   updateAdminUser(formData).then((res: any) => {
  //     toast.success(res.data.result.msg)
  //     setTimeout(() => {
  //       window.location.reload()
  //     }, 3000)
  //   })
  // }
  useEffect(() => {
    fetchRoles()
    if ((userInfo?.result?.user_id || userInfo?.user_id) !== null) {
      fetchUserById()
    }
  }, [])

  function handleSubmit() {
    const storageRef = ref(storage, `user/${userFile?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, userFile);

    uploadTask.on(
      "state_changed",
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        alert(error);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((userImageUrl: string) => {
            const coverStorageRef = ref(storage, `user/${coverFile?.name}`);
            const coverUploadTask = uploadBytesResumable(coverStorageRef, coverFile);

            coverUploadTask.on(
              "state_changed",
              (res: any) => {
                console.log(res);
              },
              (error: any) => {
                alert(error);
              },
              async () => {
                getDownloadURL(coverUploadTask.snapshot.ref).then((coverImageUrl: string) => {
                  toast.success('Images Uploaded Successfully');

                  const formData = {
                    name: userName,
                    login: email,
                    password: password,
                    phone: phone,
                    role_id: JSON.parse(roles),
                    image_url: userImageUrl,
                    cover_url: coverImageUrl,
                    user_id: userInfo?.result?.user_id ? userInfo?.result?.user_id : userInfo?.user_id
                  };

                  try {
                    dispatch(userUpdate(formData)).then((res: any) => {
                      toast.success(res?.payload?.msg);
                      if (res?.payload?.success === true) {
                        setTimeout(() => {
                          router(-1);
                        }, 3000);
                      }
                    });
                  } catch (err: any) {
                    console.error(err);
                    toast.error('Access Denied');
                  }
                });
              }
            );
          });
      }
    );
  }
  return(
    <>
      <div>
        <br/>
        <br/>
        <Card className='border-0'>
          <Card.Body>
            <h3 className='theme-font theme-danger my-3'>Edit Profile</h3>
            <form action="" className='p-2'>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">User Name *</label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className='w-75 form-control fs-7'
                  type="text"
                  value={userName}
                  placeholder='Enter Username'
                />
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Role *</label>
                <select
                  className='w-75 form-control fs-7'
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                >
                  <option value="">none</option>
                  {roleData?.map((item: any) => (
                    <option value={item?.role_id}>{item?.role_name}</option>
                  ))}
                </select>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Email *</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-75 form-control fs-7'
                  type="text"
                  value={email}
                  placeholder='Enter Email'
                />
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Password *</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-75 form-control fs-7'
                  type="password"
                  value={password}
                  placeholder='Enter Password'
                />
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Phone *</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className='w-75 form-control fs-7'
                  type="text"
                  value={phone}
                  placeholder='Enter Phone'
                />
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">User Image *</label>
                <div className='d-flex flex-column'>
                  <label>
                    {userImage &&
                      <img src={userImage} height='54' width='54' className='rounded-circle' alt="Image"/>
                    }
                    <input
                      type="file"
                      hidden
                      id='filePicker'
                      onChange={(e) => imageHandler(e)}
                    />
                  </label>
                  <button
                    type='button'
                    onClick={() => document.getElementById('filePicker')!.click()}
                    className='bg-transparent border-0'
                  ><BsCloudUpload className='mx-2 theme-danger' size={20} />Upload Latest</button>
                </div>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Cover Image *</label>
                <div className='d-flex flex-column'>
                  <label>
                    {coverImage &&
                      <img src={coverImage} height='54' width='178' alt="Image"/>
                    }
                    <input
                      type="file"
                      hidden
                      id='filePicker2'
                      onChange={(e) => coverHandler(e)}
                    />
                  </label>
                  <button
                    type='button'
                    onClick={() => document.getElementById('filePicker2')!.click()}
                    className='bg-transparent border-0'
                  ><BsCloudUpload className='mx-2 theme-danger' size={20} />Upload Latest</button>
                </div>
              </div>
            </form>
            <br/>
            <div className='d-flex w-100 justify-content-end'>
              <button
                className='bg-secondary rounded border-0 text-white px-3 py-1 mx-2'
                onClick={() => router(-1)}
              >Back</button>
              <button
                className='bg-theme-danger rounded border-0 text-white px-3 py-1 mx-2'
                onClick={() => handleSubmit()}
              >Save</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
export default EditProfile;
