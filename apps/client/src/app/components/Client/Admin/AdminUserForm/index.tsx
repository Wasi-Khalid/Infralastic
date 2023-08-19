import './admin-user-form.scss';
import {Card} from "react-bootstrap";
import {addAdminUser, addCompany, getAllRoles} from "@infralastic/global-state";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {BiArrowBack} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {BsCloudUpload} from "react-icons/bs";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../../../services/config/firebase";

const AdminUserForm = (id: any) => {

  const [roles, setRoles] = useState<any>('');
  const [roleData, setRoleData] = useState<any>([]);
  const [userName, setUserName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const [userFile, setUserFile] = useState<any>(null);
  const [coverFile, setCoverFile] = useState<any>(null);
  const [userImage, setUserImage] = useState<any>('');
  const [coverImage, setCoverImage] = useState<any>('');
  const router = useNavigate();


  const imageHandler = (e:any) => {
    setUserFile(e.target.files[0]);
    setUserImage(URL.createObjectURL(e.target.files[0]));
  }
  const coverHandler = (e:any) => {
    setCoverFile(e.target.files[0]);
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  }

  const fetchRoles = () => {
    const config = {}
    getAllRoles(config).then((res) => {
      setRoleData(res.data.result.role_details)
    })
  }
  // function handlSubmit() {
  //   const formData = {
  //     name: userName,
  //     login: email,
  //     password: password,
  //     phone: phone,
  //     role_id: JSON.parse(roles)
  //   }
  //   addAdminUser(formData).then((res: any) => {
  //     toast.success(res.data.result.msg);
  //     if (res?.data?.result?.success === true) {
  //       setTimeout(() => {
  //         router(-1)
  //       }, 3000)
  //     }
  //   })
  // }
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
                    cover_url: coverImageUrl
                  };

                  try {
                    addAdminUser(formData).then((res: any) => {
                      toast.success(res.data.result.msg);
                      if (res?.data?.result?.success === true) {
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
  useEffect(() => {
    fetchRoles()
  }, [])
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <Card className='border-0'>
        <div className='position-absolute back-btn'>
          <button
            className='bg-theme-danger border-0 text-white d-flex align-items-center p-2 rounded-circle'
            onClick={() => router(-1)}
          >
            <BiArrowBack />
          </button>
        </div>
        <Card.Header className='bg-dark text-white theme-font'>
          <p className='m-0 p-2 fs-5'>Step 01: <span className='theme-danger'>Add User</span></p>
        </Card.Header>
        <Card.Body>
          <form action="" className='p-2'>
            <div className='d-flex align-items-center py-2 w-100'>
              <label className='w-25 fs-7' htmlFor="">User Name *</label>
              <input onChange={(e) => setUserName(e.target.value)} className='w-75 form-control fs-7' type="text" placeholder='Enter Username'/>
            </div>
            <div className='d-flex align-items-center py-2 w-100'>
              <label className='w-25 fs-7' htmlFor="">Role *</label>
              <select
                className='w-75 form-control fs-7'
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
              <input onChange={(e) => setEmail(e.target.value)} className='w-75 form-control fs-7' type="text" placeholder='Enter Email'/>
            </div>
            <div className='d-flex align-items-center py-2 w-100'>
              <label className='w-25 fs-7' htmlFor="">Password *</label>
              <input onChange={(e) => setPassword(e.target.value)} className='w-75 form-control fs-7' type="password" placeholder='Enter Password'/>
            </div>
            <div className='d-flex align-items-center py-2 w-100'>
              <label className='w-25 fs-7' htmlFor="">Phone *</label>
              <input onChange={(e) => setPhone(e.target.value)} className='w-75 form-control fs-7' type="text" placeholder='Enter Phone'/>
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
          <br/>
          <br/>
        </Card.Body>
      </Card>
      <Card className='border-0'>
        <Card.Header className='bg-dark text-white theme-font'>
          <p className='m-0 p-2 fs-5'>Step 02: <span className='theme-danger'>Define Scope</span></p>
        </Card.Header>
        <Card.Body>
          <form action="" className='d-flex w-100'>
            <label className='w-25' htmlFor="">Devices to be managed</label>
            <div className="d-flex align-items-center">
              <div className='px-4'>
                <input type="radio" name="role" />
                <label className='px-1' htmlFor="html">All Devices</label>
              </div>
              <div className='px-4'>
                <input type="radio" name="role" />
                <label className='px-1' htmlFor="css">Selected Group(s)</label>
              </div>
            </div>
          </form>
          <br/>
          <br/>
          <div className="d-flex justify-content-end w-100">
            <button className='border-0 bg-gray text-white px-3 py-2 rounded mx-2'>Cancel</button>
            <button
              className='border-0 bg-theme-danger text-white px-3 py-2 rounded mx-2'
              onClick={() => handleSubmit()}
              type='button'
            >Add User</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default AdminUserForm;
