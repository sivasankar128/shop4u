import React ,{useContext} from 'react'
import { ProductContext } from './items/contextformat'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import allproducts from './assests/allproducts';
import Productdisplay from './Productdisplay';


export default function Product() {
  const {allproducts} = useContext(ProductContext);
      const{productId} =  useParams();
      const product = allproducts.find((e) => e.id === Number(productId));
    
      
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
    </div>
  )
}

