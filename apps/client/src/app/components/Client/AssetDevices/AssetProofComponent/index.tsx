import './asset-proof-component.scss';
import {Card, Col, Row} from "react-bootstrap";
import {BsPlus} from "react-icons/bs";
import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";
import {getAssetImages} from "@infralastic/global-state";
import {useEffect, useState} from "react";

const AssetProofComponent = () => {
    const router = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [images, setImages] = useState<any>([])
    const id: any = searchParams.get('asset_unique_id');

    const fetchImages = () => {
        const formData: any = {
            asset_unique_id: id
        }
        getAssetImages(formData).then((res: any) => {
            setImages(res.data.result.image_urls)
        })
    }

    useEffect(() => {
        if (id) {
            fetchImages()
        }
    }, [])
    return(
        <div>
            <Card>
              <Card.Body>
                  <div className='d-flex justify-content-end w-100 py-3'>
                      <button
                          className='px-2 pe-3 py-1 text-white border-0 bg-theme-danger h-34 rounded d-flex align-items-center'
                          onClick={() => router({
                              pathname: '/add-asset-attachment',
                              search: `?${createSearchParams({
                                  asset_unique_id: id
                              })}`
                          })}>
                          <BsPlus size={20} className='me-2' />Add New Photos
                      </button>
                  </div>
                  <Row className='py-3 w-100 justify-content-center'>
                      {images?.map((item: any) => (
                          <Col md={3}>
                              <img className='mb-2 p-1 rounded' src={item?.image_url} height='260' width='320' alt=""/>
                          </Col>
                      ))}
                  </Row>
              </Card.Body>
          </Card>
        </div>
  )
}
export default AssetProofComponent;
