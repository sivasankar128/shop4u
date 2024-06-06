import React,{useContext, useState} from 'react'
import image from '../assests/image.jpg'
import logo from '../assests/logo.png'
import cart from '../assests/cart.jpg'
import { Link } from 'react-router-dom'
import { ProductContext } from '../items/contextformat'

export default function Nav() {
  const[menu,setMenu]=useState("");
  const[arrow,setArrow]=useState("▼")
  const{totalitems} = useContext(ProductContext);
  const [username, setUsername] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isLoggedIn = !!localStorage.getItem('auth-token');

    const Dropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setArrow(dropdownVisible ? "▼" : "▲");
    };

    const fetchUser = async () => {
      const token = localStorage.getItem('auth-token');
      if (token) {
          try {
              const response = await fetch('https://shop4u-1.onrender.com/user', {
                  headers: {
                      'auth-token': token,
                  },
              });
              const data = await response.json();
              setUsername(data.name);
          } catch (error) {
              console.error('Error fetching user:', error);
          }
      }
  };

  fetchUser();
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="LOGO" className='logoimg'/>
      </div>
      <div className='navright'>
      <ul className='lists'>
        <li className='li' onClick={()=>setMenu("shop")}><Link to={isLoggedIn ? '/start' : '/'} style={{textDecoration:'none',listStyleType:'none',color:'white'}}>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li className='li' onClick={()=>setMenu("categories")}><Link to='/categories' style={{textDecoration:'none',listStyleType:'none',color:'white'}}>Categories</Link>{menu==="categories"?<hr/>:<></>}</li>
        <li className='li' onClick={()=>setMenu("help")}><Link to='/help-us' style={{textDecoration:'none',listStyleType:'none',color:'white'}}>Help</Link>{menu==="help"?<hr/>:<></>}</li>
      </ul>
      {/*
        <div classNmae="searchipt">
          <input type="search" className="srch"  placeholder="  Search for the Products.."/>
        </div>
       
       <Link><img className='srchbtimg' src={image}/></Link>  */}
        
        <div><Link to='/cart'><img className='cartbtimg' src={cart}/></Link></div>
        <div className='cartcnt'> {totalitems()} </div>
        {localStorage.getItem('auth-token') ?(
                <div className="user-menu">
                    <p onClick={Dropdown} className="username">{username+"  "} {arrow}</p>
                    {dropdownVisible && (
                        <ul className="dropdown-menu">
                            <li>
                            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='logoutbutton'>Log out</button>
                            </li>
                        </ul>
                    )}
                </div>
            )
        :<Link to='/login'><button className='loginbutton'>Login</button></Link>}
        
        </div>
      </div>
    
  )
}
