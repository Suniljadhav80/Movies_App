import React, { useEffect, useState } from 'react'
import "../index.css";
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { FaHeart } from "react-icons/fa";
import API from "../data.json"
function Products() {
  const dispatch=useDispatch();
    const [Products,setProducts]=useState([]);
    const [like,Setlike]=useState(false)
    useEffect(()=>{
      const fetchproducts=async()=>{
        setProducts(API)
      }
      fetchproducts()
    },[])
    const handleAdd=(product)=>{
      Setlike(product.id)
      dispatch(add(product))
    }

  return (

    <div className='productwrapper'>

  {
     Products.map((producta)=>
      (

      <div className="card">
        <img src={producta.image} alt="Avatar" style={{width:"100%"}}/>
        <div className="container">
          <div className='rt'>
          <h4><b>{producta.movie}</b></h4>
          <h4><b>{producta.releaseYear}</b></h4>
          <span onClick={()=>handleAdd(producta)}>
            {
              !like?<FaHeart className="fav_icon"/>:<FaHeart style={{color:"blue"}}/>
            }

            </span>
          </div>   
           <button id="btn-watch">WATCH NOW</button>
               </div>
          </div>
     ))
    }


      </div>
  )
}

export default Products;