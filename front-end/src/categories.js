import React from 'react';
import { Link } from 'react-router-dom';

import menlist1 from "./assests/menlist1.png";
import menlist2 from "./assests/menlist2.png";
import menlist3 from "./assests/menlist3.png";
import womenlist1 from "./assests/womenlist1.png";
import womenlist2 from "./assests/womenlist2.png";
import womenlist3 from "./assests/womenlist3.png";
import menshoes from "./assests/menshoes.png";
import womensandals from "./assests/womensandals.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Categories() {
  return (
    <>
      <div className='categories'>
        <div className='mens'>
          <div className='item-list'>
            <div className='item'>
              <Link to='/menshirts'><img className='item-img' src={menlist1} alt="Men's Shirt" style={{"marginTop":"-4.3rem","borderBottomRightRadius":"95px",}}/></Link>
              <Link to='/menshirts' style={{"textDecoration":'none',"color":"black"}} ><p className='item-head'>Men's Shirt</p></Link>
            </div>
            <div className='item'>
            <Link to='/mentshirts'><img className='item-img' src={menlist2} alt="Men's T-Shirt"  style={{"margin":"-4.4rem 0 0 0.8rem","borderBottomLeftRadius":"80px"}}/></Link>
            <Link to='/mentshirts' style={{"textDecoration":'none',"color":"black"}}><p className='item-head' style={{"marginTop":"0.8rem"}}>Men's T-Shirt</p></Link>
            </div>
            <div className='item'>
            <Link to='/menpants'><img className='item-img' src={menlist3} alt="Bottom Wear" style={{"marginTop":"-4.2rem","borderBottomRightRadius":"100px","height":"250px"}}/></Link>
            <Link to='/menpants' style={{"textDecoration":'none',"color":"black"}}><p className='item-head'>Bottom Wear</p></Link>
            </div>
            <div className='item'>
            <Link to=''><img onClick={()=>{alert("Coming Soon...")}} className='item-img' src={menshoes} alt="Men's Shoes" style={{"marginTop":"-1rem","borderBottomRightRadius":"100px","height":"200px","width":"100"}}/></Link>
            <Link to='' style={{"textDecoration":'none',"color":"black"}}><p onClick={()=>{alert("Coming Soon...")}} className='item-head'>Men's Shoes</p></Link>
            </div>
          </div>
        </div>
  
        <div className='womens'>
          <div className='item-list'>
            <div className='item'>
            <Link to='/womensarees'><img className='item-img' src={womenlist1} alt="Women's Sarees" style={{"marginTop":"-4.3rem","borderBottomRightRadius":"97px"}}/></Link>
            <Link to='/womensarees' style={{"textDecoration":'none',"color":"black"}}><p className='item-head'>Women's Sarees</p></Link>
            </div>
            <div className='item'>
            <Link to='/womentops'><img className='item-img' src={womenlist2} alt="Women's Tops" style={{"marginTop":"-4.2rem","borderBottomRightRadius":"95px"}}/></Link>
            <Link to='/womentops' style={{"textDecoration":'none',"color":"black"}}><p className='item-head'>Women's Tops</p></Link>
            </div>
            <div className='item'>
            <Link to='/womenbottoms'><img className='item-img' src={womenlist3} alt="Bottom Wear" style={{"marginTop":"-4.35rem","borderBottomRightRadius":"100px"}}/></Link>
            <Link to='/womenbottoms' style={{"textDecoration":'none',"color":"black"}}><p className='item-head'>Bottom Wear</p></Link>
            </div>
            <div className='item'>
            <Link to=''><img onClick={()=>{alert("Coming Soon...")}} className='item-img' src={womensandals} alt="Women's Sandals" style={{"marginTop":"-1rem","borderBottomRightRadius":"99px","height":"200px","width":"100"}}/></Link>
            <Link to='' style={{"textDecoration":'none',"color":"black"}}><p onClick={()=>{alert("Coming Soon...")}} className='item-head'>Women's Sandals</p></Link>
            </div>
          </div>
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
  );
}
