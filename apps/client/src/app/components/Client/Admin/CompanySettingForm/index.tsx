import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import {addCompany, addEmployee, getLocation, updateEmployeeById, useGlobalSelector} from "@infralastic/global-state";
import {toast} from "react-toastify";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../../../services/config/firebase";
import {BsCloudUpload} from "react-icons/bs";
import route from "../../../../routes/route";
import {useNavigate} from "react-router-dom";

const CompanySettingForm = () => {
  const [name, setName] = useState('');
  const router = useNavigate();
  const [webUrl, setWebUrl] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [location, setLocation] = useState<any>(null);
  const [locationData, setLocationData] = useState<any>([]);
  const [file, setFile] = useState<any>(null);
  const [imageFile, setImageFile] = useState('');
  const [imageURL, setImageURL] = useState('');
  const { userInfo } = useGlobalSelector((state) => state.user);

  const fetchLocation = () => {
    const config = {}
    getLocation(config).then((res: any) => {
      setLocationData(res.data.result.location_details)
    })
  }
  const imageHandler = (e:any) => {
    setFile(e.target.files[0]);
    setImageFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit() {

    if (name.trim() === '') {
      toast.error('Name field cannot be empty');
      return;
    }

    if (latitude !== '' && (parseFloat(latitude) < -90 || parseFloat(latitude) > 90)) {
      toast.error('Latitude must be between -90 and 90 degrees');
      return;
    }

    if (longitude !== '' && (parseFloat(longitude) < -90 || parseFloat(longitude) > 90)) {
      toast.error('Longitude must be between -90 and 90 degrees');
      return;
    }

    const storageRef = ref(storage, `company/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (res: any) => {
        console.log(res)
      },
      (error: any) => {
        alert(error);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url: any) => {
          toast.success('Image Uploaded Successfully')
          setImageURL(url)
            const formData: any =  {
              company_name: name,
              web_url: webUrl,
              location_id: JSON.parse(location),
              image_url: url,
              latitude: latitude,
              longitude: longitude,
              user_id: userInfo?.result?.user_id,
            }
            try {
              addCompany(formData).then(async (res: any) => {
                if (res?.data?.result?.success === true) {
                  toast.success(res?.data?.result?.msg);
                  setTimeout(() => {
                    router(-1)
                  }, 3000)
                } else {
                  toast.error(res?.payload);
                }
              });
            } catch (err: any) {
              console.error(err);
              toast.error('Access Denied');
            }
        });
      });
  }
  useEffect(() => {
    fetchLocation()
  }, [])
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <div>
        <Card className='border-0'>
          <Card.Header className='bg-dark text-white theme-font'>
            <p className='m-0 p-2 fs-5'><span className='theme-danger'>Company Details</span></p>
          </Card.Header>
          <Card.Body>
            <form action="" className='p-2'>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Name *</label>
                <input onChange={(e) => setName(e.target.value)} className='w-75 form-control fs-7' type="text" placeholder='Enter Name'/>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Web URL</label>
                <input onChange={(e) => setWebUrl(e.target.value)} className='w-75 form-control fs-7' type="text" placeholder='Enter Web URL'/>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Latitude *</label>
                <input onChange={(e) => setLatitude(e.target.value)} className='w-75 form-control fs-7' type="number" placeholder='Enter Latitude'/>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Longitude *</label>
                <input onChange={(e) => setLongitude(e.target.value)} className='w-75 form-control fs-7' type="number" placeholder='Enter Longitude'/>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Location *</label>
                <select
                  className='w-75 form-control fs-7'
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">none</option>
                  {locationData?.map((item: any) => (
                    <option value={item?.location_id}>{item?.location_name}</option>
                  ))}
                </select>
              </div>
              <div className='d-flex align-items-center py-2 w-100'>
                <label className='w-25 fs-7' htmlFor="">Logo</label>
                <div className='d-flex flex-column'>
                  <label>
                    {imageFile &&
                      <img src={imageFile} height='54' width='178' alt="Image"/>
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
            </form>
            <br/>
            <div className="d-flex justify-content-end w-100">
              <button className='border-0 bg-gray text-white px-3 py-2 rounded mx-2'>Cancel</button>
              <button
                className='border-0 bg-theme-danger text-white px-3 py-2 rounded mx-2'
                onClick={() => handleSubmit()}
                type='button'
              >Save</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
export default CompanySettingForm;
