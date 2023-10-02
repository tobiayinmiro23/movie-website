import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './AllMovies.css'
import Footer from './Footer';


function Search() {
    const [movieData,setmovieData]=useState([])
    const [searchmovie,setsearchmovie]=useState('')
    const [loading, setloading] = useState(false)


    const Search=  ()=>{
        setloading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4ba0c9d319e748dedd11b904098470a7&query=${searchmovie}&page=1&`)
          .then(res=>res.json())
          .then(data=>{
            setmovieData(data.results)
            console.log(data)
            setloading(false)
          })
          .catch(err=>{
            console.log(err)
            alert('an error occured')
            setloading(false)
          })
          
        }
          return <div className="AllMoviesContainer searchHeading">
                    <header>
                        <h1 className='heading'>Search</h1>
                    </header>
                  <div className="search">
                    <input type="text" onChange={(e)=>setsearchmovie(e.target.value)} value={searchmovie} name="" id="" />
                     <button onClick={Search}><h3 >Search</h3></button>
                  </div>
                  {loading &&
                  <div className="anime">
                    <div className="round"></div>
                  </div>}

                  {
                      movieData.length ===0  &&
                      <div className='noResult'>
                            <h1>No result</h1>
                      </div>

                    }
                  <div className='Allmovies'>
                    {movieData.map(data=>{
                      return(
                              <div key={data.id} className="movieContainer">
                                  <div key={data.id} className="movieWrapper">
                                  <div className='movieimg'>
                                  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="movie img" />
                                  </div>
                                  <Link to={`/Movie/${data.id}`}><h2>{data.title}</h2></Link>
                                  <p>{data.overview}</p>
                                  <div className="btn">
                                          <button onClick={()=>{alert(`downloading ${data.title}`)}}><h3>Download</h3></button>
                                  </div>
                                  </div>
                              </div>
                      )
                    })}
                  </div>
                  {
                      movieData.length !==0  &&
                      <div>
                              <hr />
                            <Footer/>
                          </div>

                    }
        </div>;
}

export default Search;
