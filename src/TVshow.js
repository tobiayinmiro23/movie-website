import React, { useEffect, useState } from 'react';
// // for a specific season
// https://api.themoviedb.org/3/tv/114695?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US
// // popular tv show
// https://api.themoviedb.org/3/tv/popular?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1
// // searching tv shows
// https://api.themoviedb.org/3/search/tv?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1&include_adult=false&query={{movieName}}
// similar movie
// fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1`)
// recomendations
// fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1`)
function TVshow({id,page}) {
    const [movieData,setmovieData]=useState([])
    useEffect(
        ()=>{
          fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US`)
          .then(res=>res.json())
          .then(data=>{setmovieData(data)})
        }
    ,[])

  return <div className='Movie'>
                <div className="AllMoviesContainer">
                <header>
                    <div className="img" onClick={()=>page('/Home')}><img src="/image/arrow.png" alt="" /></div>
                    <h1 className='heading' style={{color:'black'}}>-</h1>
                    <div className="d"></div>
                </header>
                  <div className='Allmovies'>
                              <div className="movieContainer">
                                  <div key={movieData.id} className="movieWrapper">
                                  <div className='movieimg'>
                                  <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="movie img" />
                                  </div>
                                  <h2 style={{textDecoration:'none'}}>{movieData.name}</h2>
                                  <p>{movieData.overview}</p>
                                  <div className="btn">
                                          <button onClick={()=>{alert(`downloading ${movieData.name}`)}}><h3>Download</h3></button>
                                  </div>
                                  </div>
                              </div>
                  </div>
                  <hr />
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
        </div>;
}

export default TVshow;
