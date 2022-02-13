import React, { useEffect, useState } from 'react';
import './AllMovies.css'
import {Link} from 'react-router-dom';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function MostPopular3() {
  const [movieData,setmovieData]=useState([])
  // function to fetch most popular movies from tmdb API
  useEffect(
          ()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=3&sort_by=popularity.desc')
            .then(res=>res.json())
            .then(data=>{setmovieData(data.results)})
          }
  ,[])
    
        return <div className="AllMoviesContainer">
                  <h1 className='heading'>Most popular</h1>
                  
                  <div className='Allmovies'>
                    {movieData.map(data=>{
                      return(
                              <div key={data.id} className="movieContainer">
                                  <div key={data.id} className="movieWrapper">
                                  <div className='movieimg'>
                                  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="movie img" />
                                  </div>
                                  <h2><Link to={`/Movie/${data.id}`}>{data.title}</Link></h2>
                                  
                                  <p>{data.overview}</p>
                                  <div className="btn">
                                          <button onClick={()=>{alert(`downloading ${data.title}`)}}><h3>Download</h3></button>
                                  </div>
                                  </div>
                              </div>
                      )
                    })}
                  </div>
                  <hr />
                    <div className="moviebtns">
                    <Link to='/MostPopular'>< button ><h3>1</h3></button></Link>
                      <Link to='/MostPopular2'>< button ><h3>2</h3></button></Link>
                      <Link to='/MostPopular3'><button className='current'><h3>3</h3></button></Link>
                      <Link to='/MostPopular4'><button ><h3>4</h3></button></Link>
                      <Link to='/MostPopular5'><button ><h3>5</h3></button></Link>
                      <Link to='/MostPopularEnd'><KeyboardDoubleArrowRightIcon/></Link>
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

export default MostPopular3;
