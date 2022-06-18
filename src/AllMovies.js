import React, { useEffect, useState } from 'react';
import './AllMovies.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
function AllMovies({page,id}) {
  const [movieData,setmovieData]=useState([])
  // function to fetch most popular movies from tmdb API
  useEffect(
          ()=>{
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=4ba0c9d319e748dedd11b904098470a7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=7')
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
      const ShowMovie=(param)=>{
        id(param)
        page('/Movie')
      }
        return <div className="AllMoviesContainer">
                  <header>
                      <div className="img" onClick={()=>page('/Home')}><img src="/image/arrow.png" alt="" /></div>
                      <h1 className='heading'>All movies</h1>
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
                                  <h2  onClick={()=>ShowMovie(data.id)}>{data.title}</h2>
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
                      <button className='current' onClick={()=>page('/Allmovies')}><h3>1</h3></button>
                      < button onClick={()=>page('/Allmovies2')} ><h3>2</h3></button>
                      <button onClick={()=>page('/Allmovies3')}><h3>3</h3></button>
                      <button onClick={()=>page('/Allmovies4')}><h3>4</h3></button>
                      <button onClick={()=>page('/Allmovies5')}><h3>5</h3></button>
                      <div onClick={()=>page('/AllmoviesEnd')}><KeyboardDoubleArrowRightIcon/></div>
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
