import React, {useState } from 'react';
import './HomePage.css'
function HomePage({page}) {
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
                    <h3 onClick={()=>page('/LatestMovie')}>Latest Movies</h3>
                    <h3 onClick={()=>page('/LatestTVshows')}>Latest TVshows</h3>
                    <h3 onClick={()=>page('/Sci-fi')}>Sci-fi</h3>
                    <h3   onClick={()=>page('/Comedy')}>Comedy</h3>
                    <h3 onClick={()=>page('/Action')}>Action</h3>
                    <h3 onClick={()=>page('/Romance')}>Romance</h3>
                    <h3 onClick={()=>page('/Anime')}>Anime</h3>
                    <h3 onClick={()=>page('/Search')}>Search</h3>
                </div>
                <div onClick={()=>page('/Allmovies')} style={{textDecoration:'none'}} className="all"><h1>All Movies</h1></div>
            </div>    
            <footer>
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
            </footer>
        </div>
        
    </div>
   
  );
}

export default HomePage;
