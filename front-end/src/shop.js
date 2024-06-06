import React,{useState} from 'react'
import menoffers from "./assests/menoffers.png"
import womenoffers from "./assests/womenoffers.png"
import landing_image from "./assests/landing image.jpg"
import './App.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Slide,Zoom } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import list from "./assests/newarrival"
import list1 from "./assests/bestseller"
import Format from './items/format';
import Format1 from './items/format1';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';



export default function Shop() {
  
  return (
    <div className="shop-container">
    <div className='landingpage'>
    <div><img className='landingimg' src={landing_image} /></div>
    <div className="hero-content">
          <p  style={{'fontSize':'50px','padding-bottom':'20px'}}>Welcome to SHOP<span>4U</span></p><div className='dash1'></div>
          <p  style={{'fontSize':'23px'}}>Your one-stop destination for <br/> fashion and lifestyle!</p><br/>
          <p style={{'fontSize':'23px'}}>Discover the latest trends and exclusive collections.</p><br/>
          <p style={{'fontSize':'23px'}}>Join our community and enjoy special offers and discounts!</p>
          <Link to='./login'><button className="shop-now-btn">Shop Now</button></Link>
        </div>
    </div>

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
            return <Format key={i} id={item.id} image={item.image}  name={item.name} price={item.price} newprice={item.newprice} lk={item.lk}/>
        })}
      </div>
      <br />
      <br />

      <div className='listss'>
      <h1 className='headingnew'>Best Sellers...</h1>
      <div className='dash11'></div>
      <div className='newarrivals'>
        {list1.map((item,i)=> {
            return <Format1 key={i} id={item.id} image={item.image} name={item.name} price={item.price} newprice={item.newprice} lk={item.lk} />
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
