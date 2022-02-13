import React, { useState } from 'react';
import './AllMovies.css'
import {Link} from 'react-router-dom';


function Search() {
    const [movieData,setmovieData]=useState([])
    const [searchmovie,setsearchmovie]=useState('')
    const Search=()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4ba0c9d319e748dedd11b904098470a7&query=${searchmovie}&page=1&`)
        .then(res=>res.json())
        .then(searchResult=>{setmovieData(searchResult.results)})
        
        
    }

  return <div className="AllMoviesContainer">
                <h1 className='heading'>Search Movies</h1>
                  <div className="search">
                    <input type="text" onChange={(e)=>setsearchmovie(e.target.value)} value={searchmovie} name="" id="" />
                     <button onClick={Search}><h3 >Search</h3></button>
                  </div>
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
        </div>;
}

export default Search;
