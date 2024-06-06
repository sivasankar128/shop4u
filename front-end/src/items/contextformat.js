import React ,{createContext, useEffect, useState} from 'react'
import allproducts from '../assests/allproducts'


export const ProductContext = createContext({allproducts}); 
const getDefaultCart = () =>{
  let cart= {};
  for(let i=0;i <  allproducts.length;i++){
     cart[i]=0;
  }
  return cart;
}

const ProductProvider = ({ children }) => {
  
  const[cartitems,setCartitems] = useState(getDefaultCart());
  useEffect(()=>{
    if(localStorage.getItem('auth-token')){
      fetch('https://shop4u-1.onrender.com/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':localStorage.getItem('auth-token'),
          'Content-Type':'application/json',
        },
        body:"",
      })
      .then((response)=>response.json())
      .then((data)=>setCartitems(data));
    }
  })
  
  const addtoCart = (itemId)=>{
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    if(localStorage.getItem('auth-token')){
        fetch('https://shop4u-1.onrender.com/addtocart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type':'application/json',
          },
          body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
  }


  const removefromCart = (itemId)=>{
    setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-  1}))
    if(localStorage.getItem('auth-token')){
      fetch('https://shop4u-1.onrender.com/removefromcart',{
        method:'POST',
        headers:{
          Accept:'application/formdata',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
  }
  }
  const remove = (itemId)=>{
    setCartitems((prev)=>({...prev,[itemId]:0}))
  }
  const totalCartAmount = () => {
    let total = 0;
    for (const id in cartitems) {
      if (cartitems[id] > 0) {
        let info = allproducts.find((product) => product.id === Number(id));
        if (info) {
          total += info.cost * cartitems[id];
        }
      }
    }
    return total;
  };

  const totalitems = ()=>{
    let totalitem=0;
    for(const i in cartitems){
      if(cartitems[i]>0){
        totalitem+=cartitems[i];
      }
    }
    return totalitem

  }


  const products = { allproducts ,cartitems,addtoCart,removefromCart,remove,totalCartAmount,totalitems};

  return ( 
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider; 