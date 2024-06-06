import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Products(props) {
  return (
    <div className='prodetails'>
      <Link to={`/product/${props.id}`}><img className='productimg' src={props.image} alt='There is a Image..'/></Link>
      <Link  className='formatheading' to='/categories'><p className='formatheading'> {props.name}</p></Link>
      <div className='prices'>
      <div className='oldprice'>{props.price}</div>
      <div className='newprice'>{props.newprice}</div>
      </div>
    </div>
  )
}
