import React, { useContext } from 'react'
import './App.css'
import { ProductContext } from './items/contextformat'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emp from "./assests/menoffers.png"


export default function Cart() {
  const{allproducts,cartitems,removefromCart,addtoCart,remove,totalCartAmount } = useContext(ProductContext);
  const checkoutitems=()=>{
    const amt=totalCartAmount();
    if(amt>39){
      alert("Order Received..🥳🥳");
    }
    else{
      alert("Add Items to Checkout...");
    }
  }
  return (
    <>
    <div className='cartitems'>
      <div className='carttitles'>
        <p>Item</p>
        <p>Name</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {allproducts.map((e)=>{
      if(cartitems[e.id]>0){
          return ( 
          <>
          <div className='cartmenu'>
                    <div className='cartitemslist'>
                      <img src={e.image} alt='Image' />
                      <p className='clname'>{e.name}</p>
                      <p className='clsize'>{e.size}</p>
                      <div className='clq'>
                      <button className='cl- cl' onClick={()=>{removefromCart(e.id)}}>-</button> 
                      <button className='quantity cl'>{cartitems[e.id]}</button>
                      <button className='clp cl' onClick={()=>{addtoCart(e.id)}}>+</button> 

                      </div>
                      <p className='clprice'>Rs.{e.cost*cartitems[e.id]}/- </p> 
                      <button className='clremove' onClick={()=>{remove(e.id)}}>X</button> 
                      
                    </div>
                    <hr/>
                  </div>
                  </>
      )}
          else{
            return null
            
          }
         })}
        <div className='totals'>
            <h2>Total Price</h2>
            <div className='totalitemsprice'>
              <div className='pricetotal ttl'>
                <p>Sub Total</p>
                <p className='pp'>Rs.{totalCartAmount()+"/-"}</p>
              </div>
              <hr/>
              <div className='shippingtotal ttl'>
                <p>Shipping fee</p>
                <p className='pp'>Rs.{39+"/-"}</p>
              </div>
              <hr/>
              <div className='overallprice ttl'>
                <h3>Total</h3>
                <h3 className='pp'>Rs.{totalCartAmount()+39+"/-"}</h3>
              </div>
            </div>
            <button className='checkout' onClick={()=>{checkoutitems()}}>Checkout</button>
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
