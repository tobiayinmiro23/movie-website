import React, { useEffect, useState } from 'react';
// similar movie
// fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1`)
// recomendations
// fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&page=1`)
function Movie({page,id}) {
    const [movieData,setmovieData]=useState([])
    useEffect(
        ()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4ba0c9d319e748dedd11b904098470a7`)
          .then(res=>res.json())
          .then(data=>{setmovieData(data)})
        }
    ,[])
  return <div className="AllMoviesContainer">
             <div className='Movie'>
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
                                  <h2 style={{textDecoration:'none'}}>{movieData.title}</h2>
                                  <p>{movieData.overview}</p>
                                  <div className="btn">
                                          <button onClick={()=>{alert(`downloading ${movieData.title}`)}}><h3>Download</h3></button>
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

export default Movie;