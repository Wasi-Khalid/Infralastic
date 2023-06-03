import './product-catalogue.scss';
import { Card } from "react-bootstrap";
import {fetchAllCategoryList} from "../../../services/store/actions/DeviceStore";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../services/store/hooks";
import {useEffect, useState} from "react";

const ProductCatalogue = ({onData}: {onData: any}) => {
  const router = useNavigate();
  const dispatch = useAppDispatch();
  const [categoryData, setCategoryData] = useState<any>([]);
  function getCategory() {
    const config: any =  {}
    dispatch(fetchAllCategoryList(config)).then((res: any) => {
      console.log(res?.payload.result?.product_category_details)
      setCategoryData(res?.payload?.result?.product_category_details)
    })
  }
  const sendDataToParent = (data: any) => {
    onData(data);
  };

  useEffect(() => {
    getCategory()
  }, [])

  return(
    <div className='py-3'>
      <Card>
        <Card.Body>
          <h5 className='theme-font'>Product Catalogue</h5>
          <p className='theme-font fs-7 text-muted'>Shop with Infralastic for all your needs</p>
          <div className="d-flex justify-content-center overflow-auto">
            {categoryData?.map((item: any) => (
              <button className='px-1 bg-transparent border-0' onClick={() => sendDataToParent(item?.category_id)}>
                <img src={item?.image} width='152' height='80' alt="Top Deals" />
                <p
                  className='fs-7 mb-0 theme-font text-center py-2'>{item?.category_name}</p>
              </button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCatalogue;
