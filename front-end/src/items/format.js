import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Format(props) {
  const linkPath = props.link || props.lk;
  return (
    <div className='format'>
      <Link to={`/${linkPath}`}><img className='formatimg' src={props.image} alt='There is a Image..'/></Link>
      <Link  className='formatheading' to='/categories'><p className='formatheading'> {props.name}</p></Link>
      <div className='prices'>
      <div className='oldprice'>{props.price}</div>
      <div className='newprice'>{props.newprice}</div>
      </div>
    </div>
  )
}
