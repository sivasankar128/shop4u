import React, { useContext, useState } from 'react'
import './App.css'
import star from './assests/star.png'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ProductContext } from './items/contextformat';
import allproducts from './assests/allproducts';
import { FaShippingFast } from 'react-icons/fa';

export default function Productdisplay(props) {
    const {product} = props;
    const{addtoCart}=useContext(ProductContext); 
    const[image,setImage]= useState(product.image);
    const [products, setProducts] = useState(allproducts);
    const [selectedSize, setSelectedSize] = useState(null);
    
    const handleSizeClick = (size, productId) => {
      setSelectedSize(size);
      const updatedProducts = allproducts.map((prod) => {
        if (prod.id === productId) {
           prod.size = size; 
        } else {
          return prod;
        }
      });
      setProducts(updatedProducts);
    };

  console.log(allproducts);
  return (  
    <>
    <div className='productdisplay'>
        <div className='displayleft'>
            <div className='displayimg'>
                <img  src={product.image} onClick={() => setImage(product.image)}/>
                <img  src={product.image1} onClick={() => setImage(product.image1)}/>
                <img  src={product.image2} onClick={() => setImage(product.image2)}/>
            </div>
            
            <img className='mainimg' src={image}/> 
            
        </div>
        <div className='displayright'>
                <h1 className='displaynm'>{product.name}</h1>
                <div className='stars'>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <p className='reviews'>(128)</p>
                </div>
                
                <div className='display-prices'>
                <div className='display-oldprice'> {product.price}</div>
                <div className='display-newprice'> {product.newprice}</div>
                </div>
                <h3 className='reviews'>Sizes :</h3>
                <div className='display-size'>
                {product.category === "womensarees" ? (<p className={selectedSize === "Free" ? 'selected' : ''} onClick={() => handleSizeClick("Free", product.id)}>Free Size</p>) : (
                                      ['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                        <p key={size} className={selectedSize === size ? 'selected' : ''} onClick={() => handleSizeClick(size, product.id)} >
                                          {size}
                                        </p>
                                      ))
                                    )}
                </div>
                <div style={{"display":"flex","gap":"10px"}}>
                <FaShippingFast className='FaShippingFast'/><h3 className='reviews'>Delivery by 4 - 7 days</h3></div>
                <button className='addtocart' onClick={() => { if (selectedSize != null) {
                                                                  addtoCart(product.id);
                                                                  alert("Item Added..! Go to Cart to Checkout");
                                                                } else { alert("Select the size");}
                                              }}> Add To Cart</button> 
        </div>
        
    </div>
    <footer>
      <div ><h2 className='contactus'>Contact Us :</h2>
      <div className='contactrow'>
          <FaEnvelope /><p>sivasankaravula128@gmail.com</p>
      </div>
        <div className='contactrow'>
          <FaPhone /><p>(+91) 7093****93</p>
        </div>
        <div className='contactrow'>
          <FaMapMarkerAlt /><p>Vishnu Institute of Technology , Bhimavaram</p>
        </div>
      </div>
        <p className='copyright'>2024  © CopyRight || SHOP4U </p>
      </footer>
    </>
  )
}
