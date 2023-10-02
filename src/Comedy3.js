import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './AllMovies.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Footer from './Footer';
function Comedy3() {
  const [movieData,setmovieData]=useState([])
  const [loading, setloading] = useState(true)
  // function to fetch most popular movies from tmdb API
  useEffect(
          ()=>{
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=4ba0c9d319e748dedd11b904098470a7&with_genres=35&page=3')
            .then(res=>res.json())
            .then(data=>{
              setmovieData(data.results)
              setloading(false)
            })
            .catch(err=>{
              alert('an error occured')
              setloading(false)

            })
            
          }
  ,[])
        return <div className="AllMoviesContainer">
                  <header>
                      <h1 className='heading'>Comedy</h1>
                  </header>
                 {loading &&
                  <div className="anime">
                    <div className="round"></div>
                  </div>}
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
                  <hr />
                    {
                      movieData.length !==0  &&
                          <div>
                            <div className="moviebtns">
                            <Link to={`/Comedy`}><button ><h3>1</h3></button></Link>
                            <Link to={`/Comedy2`}><button  ><h3>2</h3></button></Link>
                            <Link to={`/Comedy3`}><button className='current'  ><h3>3</h3></button></Link>
                            <Link to={`/Comedy4`}><button  ><h3>4</h3></button></Link>
                            <Link to={`/Comedy5`}><button  ><h3>5</h3></button></Link>
                            <Link to={`/ComedyEnd`}><div ><KeyboardDoubleArrowRightIcon/></div></Link>
                            </div>
                            <Footer/>
                          </div>

                    }
                </div>
   ;
}

export default Comedy3;
