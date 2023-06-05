import './asset-change-component.scss';
import {Card} from "react-bootstrap";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAssetLog} from "@infralastic/global-state";

const AssetChangeComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id: any = searchParams.get('asset_unique_id');
    const [asset, setAsset] = useState<any>(null);
    const [logs, setLogs] = useState<any>([])

    const fetchChanges = () => {
        const formData = {
            asset_unique_id: id
        }
        getAssetLog(formData).then((res: any) => {
            setAsset(res.data.result);
            setLogs(res.data.result.logs)
        })
    }

    useEffect(() => {
        if (id) {
            fetchChanges()
        }
    })
    return(
        <div>
          {logs?.map((res: any) => (
            <Card className='mb-3'>
                <Card.Body>
                    <div className="d-flex w-100 p-2">
                        <div className="w-75">
                            <h5 className='m-0 theme-font'>{asset?.asset_name}</h5>
                            <h6 className='m-0 theme-font fs-13 text-muted mt-2'>{res?.logs_descp}</h6>
                        </div>
                        <div className="w-25 d-flex justify-content-end">
                            <i><BiDotsVerticalRounded size={18} /></i>
                        </div>
                    </div>
                </Card.Body>
            </Card>
          ))}
        </div>
    )
}
export default AssetChangeComponent;
