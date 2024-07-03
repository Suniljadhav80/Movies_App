import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { update } from '../store/cartSlice';
import "../update.css";
import { useNavigate } from 'react-router-dom';
function UpdateData() {

    const {id}=useParams();
    const products=useSelector(state=>state.cart);
    const existingMovie=products.filter(f=>f.id==id);
    const {movie,releaseYear}=existingMovie[0];
    const [Movies,setMovie]=useState(movie);
    const [releaseYears,setRelease]=useState(releaseYear)
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch(update({
            id:id,
            movie:Movies,
            release:releaseYears
        }))
        navigate("/Cart")
    }
  return (
    <div>

        <div class="container">
        <form onSubmit={handleUpdate}>

            <label for="fname">Movie title</label>
            <input type="text" value={Movies} onChange={e=>setMovie(e.target.value)}  id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Release Year</label>
            <input type="text" value={releaseYears} onChange={e=>setRelease(e.target.value)}  id="lname" name="lastname" placeholder="Your last name.."/>

            <input type="submit" value="Submit"/>

        </form>
        </div>
    </div>
  )
}

export default UpdateData