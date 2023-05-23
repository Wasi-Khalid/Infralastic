import './asset-notification-component.scss'
import {Card} from "react-bootstrap";
import {BiDotsVerticalRounded} from "react-icons/bi";

const AssetNotificationComponent = () => {
    return(
        <div>
            <Card className='mb-3'>
                <Card.Body>
                    <div className="d-flex w-100 p-2">
                        <div className="w-75">
                            <h5 className='m-0 theme-font'>Lenovo ThinkPad - E70</h5>
                            <h6 className='m-0 theme-font fs-7 text-muted mt-2'>Joseph requested for changes the hard drive</h6>
                            <h6 className='m-0 theme-font fs-8 text-muted mt-2'>Requested on 28 Apr 2021, 18:20</h6>
                        </div>
                        <div className="w-25 d-flex justify-content-end">
                            <i><BiDotsVerticalRounded size={18} /></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <div className="d-flex w-100 p-2">
                        <div className="w-75">
                            <h5 className='m-0 theme-font'>Macbook Pro 13</h5>
                            <h6 className='m-0 theme-font fs-7 text-muted mt-2'>Joseph requested for changes the RAM</h6>
                            <h6 className='m-0 theme-font fs-8 text-muted mt-2'>Requested on 28 Apr 2021, 18:20</h6>
                        </div>
                        <div className="w-25 d-flex justify-content-end">
                            <i><BiDotsVerticalRounded size={18} /></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default AssetNotificationComponent;