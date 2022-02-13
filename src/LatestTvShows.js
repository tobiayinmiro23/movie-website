import React, { useEffect, useState } from 'react';
import './AllMovies.css'
import {Link} from 'react-router-dom';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function LatestTvShows() {
  const [movieData,setmovieData]=useState([])
  // function to fetch most popular movies from tmdb API
  useEffect(
          ()=>{
            // fetch('https://api.themoviedb.org/3/discover/tv?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0')
            fetch('https://api.themoviedb.org/3/tv/popular?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1')
            .then(res=>res.json())
            .then(data=>{setmovieData(data.results)})
          }
  ,[])
    
        return <div className="AllMoviesContainer">
                  <h1 className='heading'>Latest tv shows</h1>
                  
                  <div className='Allmovies'>
                    {movieData.map(data=>{
                      return(
                              <div key={data.id} className="movieContainer">
                                  <div key={data.id} className="movieWrapper">
                                  <div className='movieimg'>
                                  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="movie img" />
                                  </div>
                                  <h2><Link to={`/TVshow/${data.id}`}>{data.name}</Link></h2>
                                  
                                  <p>{data.overview}</p>
                                  <div className="btn">
                                          <button><h3 onClick={()=>{alert(`downloading ${data.name}`)}}>Download</h3></button>
                                  </div>
                                  </div>
                              </div>
                      )
                    })}
                  </div>
                  <hr />
                    <div className="moviebtns">
                    <Link to='/LatestTVshows'>< button className='current'><h3>1</h3></button></Link>
                      <Link to='/LatestTVshows2'>< button ><h3>2</h3></button></Link>
                      <Link to='/LatestTVshows3'><button ><h3>3</h3></button></Link>
                      <Link to='/LatestTVshows4'><button ><h3>4</h3></button></Link>
                      <Link to='/LatestTVshows5'><button ><h3>5</h3></button></Link>
                      <Link to='/LatestTVshowsEnd'><KeyboardDoubleArrowRightIcon/></Link>
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
   ;
}

export default LatestTvShows;
