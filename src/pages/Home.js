import React from 'react'
import Products from '../Components/Products';

function Home() {
  return (
    <div>
        <h1>
            <section>
         <div id="slider">
                <figure>
                <img src="https://c4.wallpaperflare.com/wallpaper/512/1012/916/iron-man-movies-movie-poster-poster-wallpaper-preview.jpg" alt className='nt'/>
                <img src="https://c4.wallpaperflare.com/wallpaper/266/54/467/back-to-the-future-back-to-the-future-movie-poster-set-wallpaper-preview.jpg" alt className='nt'/>
                <img src="https://c4.wallpaperflare.com/wallpaper/622/1005/217/aquaman-2018-movie-12k-poster-wallpaper-preview.jpg" alt className='nt'/>
                <img src="https://c4.wallpaperflare.com/wallpaper/736/411/582/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg" alt className='nt'/>
                <img src="https://c4.wallpaperflare.com/wallpaper/622/1005/217/aquaman-2018-movie-12k-poster-wallpaper-preview.jpg" alt className='nt'/>
           </figure>
        </div>
                <h1 id="trending">Trending Movies</h1>
                <Products/>
            </section>
        </h1>
    </div>
  )
}

export default Home;