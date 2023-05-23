import './product-catalogue.scss';
import { Card } from "react-bootstrap";
import product1 from "../../../assets/products/product_1.png"
import product2 from "../../../assets/products/product_2.png"
import product3 from "../../../assets/products/product_3.png"
import product4 from "../../../assets/products/product_4.png"
import product5 from "../../../assets/products/product_5.png"
import product6 from "../../../assets/products/product_6.png"
import product7 from "../../../assets/products/product_7.png"
import product8 from "../../../assets/products/product_8.png"

const ProductCatalogue = () => {
  return(
    <div className='py-3'>
      <Card>
        <Card.Body>
          <h5 className='theme-font'>Product Catalogue</h5>
          <p className='theme-font fs-7 text-muted'>Shop with Infralastic for all your needs</p>
          <div className="d-flex justify-content-center overflow-auto">
            <div className='px-1'>
              <img src={product1} width='152' height='80' alt="Top Deals" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Top Deals</p>
            </div>
            <div className='px-1'>
              <img src={product2} width='152' height='80' alt="Laptops" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Laptops</p>
            </div>
            <div className='px-1'>
              <img src={product3} width='152' height='80' alt="" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Displays / Desktops</p>
            </div>
            <div className='px-1'>
              <img src={product4} width='152' height='80' alt="" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Mobile</p>
            </div>
            <div className='px-1'>
              <img src={product5} width='152' height='80' alt="" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Networking / IoT / Servers</p>
            </div>
            <div className='px-1'>
              <img src={product6} width='152' height='80' alt="" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Motherboards / Components</p>
            </div>
            <div className='px-1'>
              <img src={product7} width='152' height='80' alt="" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Accessories</p>
            </div>
            <div className='px-1'>
              <img src={product8} width='152' height='80' alt="" />
              <p className='fs-7 mb-0 theme-font text-center py-2'>Extended Warranty</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default ProductCatalogue;
