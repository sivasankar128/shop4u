import React from 'react'
import menoffers from "./assests/menoffers.png"
import womenoffers from "./assests/womenoffers.png"
import './App.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide,Zoom } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import list from "./assests/newarrival"
import list1 from "./assests/bestseller"
import Format from './items/format';
import Format1 from './items/format1';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Start() {
  return (
    <div>
      <div className='offerslides'>
        <div className='menoff'>
          <Zoom>
          <Link to='/categories'><img className='moimg slide'  src={menoffers} alt='Men-Offers' /></Link>
          <Link to='/categories'><img className='woimg slide' src={womenoffers} alt='Women-Offers' /></Link>
          </Zoom>
        </div>
      </div>

      
      <h1 className='headingnew'>New Arrivals...</h1>
      <div className='dash11'></div>
      <div className='newarrivals'>
        {list.map((item,i)=> {
            return <Format key={i} id={item.id} image={item.image}  name={item.name} price={item.price} newprice={item.newprice} link={item.link}/>
        })}
      </div>
      <br />
      <br />

      <div className='listss'>
      <h1 className='headingnew'>Best Sellers...</h1>
      <div className='dash11'></div>
      <div className='newarrivals'>
        {list1.map((item,i)=> {
            return <Format1 key={i} id={item.id} image={item.image} name={item.name} price={item.price} newprice={item.newprice} link={item.link}/>
        })}
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
  </div>
  )
}