import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import "../index.js";
import "../App.css";
import "../Cart.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart);
  const handleDel=(productId)=>{
    dispatch(remove(productId));
    alert("Are you sure delete favourate movie ?")
  }
 

  return (
    <div>
      {
         products.map(products=>
          (
          <div>
            {/* <img src={products.image} />
            <div className='cards'>
            <h4 className="title">{products.title}</h4>
            <h4>{products.price}</h4>
                    <button onClick={()=>handleDel(products.id)}>Remove</button>
            </div> */}
            {/* crad start*/}
            <div class="item">
         <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img src={products.image} alt="" />
    </div>
 
    <div class="description">
      <h4>{products.movie}</h4>
    </div>

    <div class="releaseYear">
      <h4>{products.releaseYear}</h4>
    </div>
    <div className="reAdd">
        <Link to={`/edit/${products.id}`}><button className="update">Update</button></Link>
        <button onClick={()=>handleDel(products.id)} id="remove">Remove</button>
          </div>
           </div> 
            {/* crad end */}
            </div>
          )   
      )
      }
    </div>
  )
}
export default Cart;