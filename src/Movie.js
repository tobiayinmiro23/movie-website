import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
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
function Movie() {
const id=useParams().id
    const [movieData,setmovieData]=useState([])
  const [loading, setloading] = useState(true)

    useEffect(
        ()=>{
           fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4ba0c9d319e748dedd11b904098470a7`)
          .then(res=>res.json())
          .then(data=>{
            setmovieData(data)
            setloading(false)
          })
          .catch(err=>{
            alert('an error occured')
            setloading(false)
          })
          
        }
,[])

  return <div className='Movie'>
                <div className="AllMoviesContainer">
                {/* <header>
                    <h1 className='heading' style={{color:'black'}}>-</h1>
                </header> */}
                {loading &&
                  <div className="anime">
                    <div className="round"></div>
                  </div>}
                  {
                      movieData.length !==0  &&
                      <div>
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
                            <Footer/>
                          </div>

                    }
                </div>
        </div>;
}

export default Movie;
