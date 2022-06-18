import React, { useEffect, useState } from 'react';
import './AllMovies.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function LatestTvShows5({page,id}) {
  const [movieData,setmovieData]=useState([])
  // function to fetch most popular movies from tmdb API
  useEffect(
          ()=>{
            fetch('https://api.themoviedb.org/3/discover/tv?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=5')
            .then(res=>res.json())
            .then(data=>{setmovieData(data.results)})
          }
  ,[])
    
  const ShowMovie=(param)=>{
    id(param)
    page('/TVshow/:id')
  }
        return <div className="AllMoviesContainer">
                  <header>
                      <div className="img" onClick={()=>page('/Home')}><img src="/image/arrow.png" alt="" /></div>
                      <h1 className='heading'>Latest Tv Show</h1>
                      <div className="d"></div>
                  </header>
                  <div className='Allmovies'>
                    {movieData.map(data=>{
                      return(
                              <div key={data.id} className="movieContainer">
                                  <div key={data.id} className="movieWrapper">
                                  <div className='movieimg'>
                                  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="movie img" />
                                  </div>
                                  <h2  onClick={()=>ShowMovie(data.id)}>{data.name}</h2>
                                  <p>{data.overview}</p>
                                  <div className="btn">
                                          <button onClick={()=>{alert(`downloading ${data.name}`)}}><h3>Download</h3></button>
                                  </div>
                                  </div>
                              </div>
                      )
                    })}
                  </div>
                  <hr />
                    <div className="moviebtns">
                      <button  onClick={()=>page('/LatestTVshows')}><h3>1</h3></button>
                      < button onClick={()=>page('/LatestTVshows2')} ><h3>2</h3></button>
                      <button onClick={()=>page('/LatestTVshows3')}><h3>3</h3></button>
                      <button onClick={()=>page('/LatestTVshows4')}><h3>4</h3></button>
                      <button onClick={()=>page('/LatestTVshows5')} className='current'><h3>5</h3></button>
                      <div onClick={()=>page('/LatestTVshowsEnd')}><KeyboardDoubleArrowRightIcon/></div>
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

export default LatestTvShows5;
