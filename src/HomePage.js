import React, { useEffect,useState } from 'react';
import AllMovies from './AllMovies'
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './HomePage.css'
 import {Link,NavLink} from 'react-router-dom';
function HomePage() {
    const [categoryClicked,setcategoryClicked]=useState(false)
    const [movieData,setmovieData]=useState([])
    const [searchmovie,setsearchmovie]=useState('')
        

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
            <div className="categories">
            <Link  to='/LatestMovie' style={{textDecoration:'none'}}><h3 onClick={()=>{setcategoryClicked(true)}}>Latest Movies</h3> </Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/TVshow'> <h3>Latest TVshows</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/MostPopular'> <h3>Most popular</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/Sci-fi'> <h3>Sci-fi</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/Comedy'> <h3>Comedy</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/Action'> <h3>Action</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/Romance'> <h3>Romance</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/Anime'> <h3>Anime</h3></Link>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}} to='/Search'> <h3>Search</h3></Link>
            </div>
            <Link onClick={()=>{setcategoryClicked(true)}} style={{textDecoration:'none'}}  to="AllMovies"><div className="all"><h1>All Movies</h1></div></Link>
            <div className={categoryClicked?'scrollDown':'none'} ><h4> <img className='down' src="/image/down-arrow.png" alt="" /> scroll down </h4></div>
           
            <div className='Allmovies'>
                    {movieData.map(data=>{
                      return(
                              <div className="movieContainer">
                                  <div key={data.id} className="movieWrapper">
                                  <div className='movieimg'>
                                  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="movie img" />
                                  </div>
                                  <h2><Link to={`/Movie/${data.id}`}>{data.title}</Link></h2>
                                  <p>{data.overview}</p>
                                  <div className="btn">
                                          <button ><h3>Download</h3></button>
                                  </div>
                                  </div>
                              </div>
                      )
                    })}
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
