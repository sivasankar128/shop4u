import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
export default function Breadcrum(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
      <Link className='breadlink' to='/'>HOME</Link> ⮞ 
      <Link className='breadlink' to='/categories'>Categories</Link> ⮞
       <Link className='breadlink' to={`/${product.category}`} >{product.category}</Link> ⮞ 
       <Link className='breadlink' to={`${product.id}`}>{product.name}</Link>
    </div>
  )
}
 