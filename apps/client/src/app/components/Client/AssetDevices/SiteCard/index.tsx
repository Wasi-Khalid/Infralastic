import './site-card.scss';
import {BiMap} from "react-icons/bi";
import React, {useState} from "react";
import {createSearchParams, useNavigate} from "react-router-dom";

interface SiteProps {
    image: string;
    address: string;
    name: string;
    total: string;
    site_id: string;
}
const SiteCard: React.FC<SiteProps> = ({ image, address, name, total, site_id }) => {
    const [show, setShow] = useState(false);
    const router = useNavigate();
    return(
        <div className='d-flex flex-column bg-transparent'>
            {show &&
                <div
                    onClick={() => router({
                        pathname: '/asset-detail',
                        search: `?${createSearchParams({
                            site_id: site_id
                        })}`
                    })}
                    className='d-flex'
                >
                <div className='card site-info mx-2'>
                    <div className="card-body p-2">
                        <div className='d-flex align-items-center h-100'>
                            <img width='78' height='78' src={image} alt=""/>
                            <h6 className='theme-font px-2 m-0'>{address}</h6>
                        </div>
                    </div>
                </div>
                <div className='card site-asset-info'>
                    <div className="card-body p-2">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <h6 className='theme-font text-center d-flex justify-content-center m-0'>Total Assets</h6>
                            <h1 className='theme-font text-center theme-danger fw-bold m-0'>{total}</h1>
                        </div>
                    </div>
                </div>
            </div>
            }
            <div
                onClick={() => setShow(!show)} className='d-flex align-items-center justify-content-center my-2 w-100'>
                <div className='bg-white rounded-circle p-1 h-fit shadow custom-pin'>
                    <BiMap className='theme-danger' size={24} />
                </div>
                <div className={show ? 'd-flex align-items-center site-location bg-theme-danger text-white' : 'bg-white d-flex align-items-center site-location'}>
                    <h5 className='m-0 px-4 theme-font'>{name}</h5>
                </div>
            </div>
        </div>
    )
}
export default SiteCard;
