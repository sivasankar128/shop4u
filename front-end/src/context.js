import React, { createContext, useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

import "./App.css"
import allproducts from './assests/allproducts'
import {ProductContext} from "./items/contextformat"
import Products from './items/productss';

export default function Context(props) {
    const {all_product} = useContext(ProductContext);
  return (
    <div>
    <div className='banner1'>
      <img src={props.banner} alt='There is a Image' className='bannerimg'/>
    </div>
    <div className='shopproducts'>

        {allproducts.map((item,i)=>{
            if(props.category==item.category){
                return <Products key={i} id={item.id} image={item.image}  name={item.name} price={item.price} newprice={item.newprice} />
            }
            else{
                return null;
            }
        })}
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
    </div>
  )
}
