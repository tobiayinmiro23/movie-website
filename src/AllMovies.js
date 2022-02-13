import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './AllMovies.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function AllMovies() {
  const [movieData,setmovieData]=useState([])
  // function to fetch most popular movies from tmdb API
  useEffect(
          ()=>{
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(res=>res.json())
            .then(data=>{setmovieData(data.results)})
            if(searchmovie===''){
                setmovieData(movieData)
              }
          }
  ,[])
  const [movieReady,setmovieReady]=useState(false)
  const [searchmovie,setsearchmovie]=useState('')
      const Search=()=>{
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=4ba0c9d319e748dedd11b904098470a7&query=${searchmovie}&page=1&with_genre=99`)
          .then(res=>res.json())
          .then(searchResult=>{setmovieData(searchResult.results)})
          setmovieReady(true)
          
      }
      // if(searchmovie===''){
      //   setmovieData(movieData)
      // }
        return <div className="AllMoviesContainer">
                  <h1 className='heading'>All Movies</h1>
                  
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
                      <button className='current'><h3><a href="/">1</a> </h3></button>
                      <Link to='/AllMovies2'><button ><h3>2</h3></button></Link>
                      <Link to='/AllMovies3'><button ><h3>3</h3></button></Link>
                      <Link to='/AllMovies4'><button ><h3>4</h3></button></Link>
                      <Link to='/AllMovies5'><button ><h3>5</h3></button></Link>
                      <Link to='/AllMoviesEnd'><KeyboardDoubleArrowRightIcon/></Link>
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

export default AllMovies;
