import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'
import Footer from './Footer';
function HomePage() {
  return( 
    <div className='HomePageWrapper'>
            <div className="heading">
                <div className="logo">
                    <img src="/image/clapperboard.png" alt="" />
                </div>
                <h1>Movie mart.com</h1>
            </div>
            <hr />

        <div className='HomePage'>
            <div className="container">
                <div className="categories">
                <h3 > <Link to='/LatestMovie'>Latest Movies </Link></h3>
                <h3 > <Link to='/LatestTvShows'>Latest TVshows</Link></h3>
                <h3 > <Link to='/Sci-fi'>Sci-fi</Link></h3>
                <h3 > <Link to='/Comedy'>Comedy</Link></h3>
                <h3 > <Link to='/Action'>Action</Link></h3>
                <h3 > <Link to='/Romance'>Romance</Link></h3>
                <h3 > <Link to='/Anime'>Anime</Link></h3>
                    <h3 > <Link to='/Search'>Search </Link></h3>
                </div>
                <div className='allmovie'><h3><Link to='/AllMovies'> <div style={{textDecoration:'none'}} className="all"><h1>All Movies</h1></div></Link></h3></div>

               
            </div>    
            {/* <footer>
                <div className="links">
                    <h5>tems</h5>
                    <h5>Subtitle</h5>
                    <h5>Contact us</h5>
                    <h5>FAQ</h5>
                    <h5>How to download</h5>
                    <h5>download the app</h5>
                </div>
                <div className="sm">
                    <div className="ig">
                        <img src="/image/icons8-instagram-48.png" alt="" />
                    </div>
                    <div className="tw">
                        <img src="/image/icons8-facebook-48.png" alt="" />
                    </div>
                    <div className="tw">
                        <img src="/image/icons8-telegram-app-48.png" alt="" />
                    </div>
                    <div className="tw">
                        <img src="/image/icons8-twitter-circled-48.png" alt="" />
                    </div>
                    <div className="yt">
                        <img src="/image/youtube (1).png" alt="" />
                    </div>
                </div>
            </footer> */}
            <Footer/>
        </div>
        
    </div>
   
  );
}

export default HomePage;
