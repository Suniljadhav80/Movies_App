import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
function Navbar() {

  const items=useSelector((state)=>state.cart);
 const nav=useNavigate()
  const Home=()=>{
    nav("/")
  }
  return (
    <span>
        <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
            <i className="fas fa-bars"><RxHamburgerMenu/></i>
        </label>
        <label class="logo">MOVIES TIMES</label>

        <Link className="navLink" to="/Cart"><span className='cartCount'><FaHeart className="fav_icon_1"/>{items.length}</span></Link>
       
       <button onClick={()=>Home()}>Home</button>
        <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">Musicals</a></li>
            <li><a href="#">Romance</a></li>
            <li><a href="#">Thriller</a></li>  
        </ul>
    </nav>
    </span>
  )
}

export default Navbar