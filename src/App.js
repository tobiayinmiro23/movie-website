import React, { useState } from 'react';
import Anime from './Anime';
import './App.css';
import Comedy from './Comedy';
import HomePage from './HomePage';
import LatestMovie from './LatestMovie';
import LatestTvShows from './LatestTvShows';
import Romance from './Romance';
import AllMovies from './AllMovies'
import Action from './Action';
import SciFi from './SciFi';
import Action2 from './Action2';
import Action3 from './Action3';
import Action4 from './Action4';
import Action5 from './Action5';
import AllMovies2 from './AllMovies2';
import AllMovies3 from './AllMovies3';
import AllMovies4 from './AllMovies4';
import AllMovies5 from './AllMovies5';
import AllMoviesEnd from './AllMoviesEnd';
import ActionEnd from './ActionEnd';
import Anime2 from './Anime2';
import Anime3 from './Anime3';
import Anime4 from './Anime4';
import Anime5 from './Anime5';
import AnimeEnd from './AnimeEnd';
import Comedy2 from './Comedy2';
import Comedy3 from './Comedy3';
import Comedy4 from './Comedy4';
import Comedy5 from './Comedy5';
import ComedyEnd from './ComedyEnd';
import LatestMovie2 from './LatestMovie2';
import LatestMovie3 from './LatestMovie3';
import LatestMovie4 from './LatestMovie4';
import LatestMovie5 from './LatestMovie5';
import LatestMovieEnd from './LatestMovieEnd';
import LatestTvShows2 from './LatestTvShows2';
import LatestTvShows3 from './LatestTvShows3';
import LatestTvShows4 from './LatestTvShows4';
import LatestTvShows5 from './LatestTvShows5';
import LatestTvShowsEnd from './LatestTvShowsEnd';
import Romance2 from './Romance2';
import Romance3 from './Romance3';
import Romance4 from './Romance4';
import Romance5 from './Romance5';
import RomanceEnd from './RomanceEnd';
import SciFi2 from './SciFi2';
import SciFi3 from './SciFi3';
import SciFi4 from './SciFi4';
import SciFi5 from './SciFi5';
import SciFiEnd from './SciFiEnd';
import Movie from './Movie';
import Search from './Search';
import TVshow from './TVshow';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import MostPopular2 from './MostPopular2';

function App() {
  const [page, setpage] = useState('/Home')

  // function to change the component being rendered
  const handlePage=(param)=>{
    setpage(param)
  }
  const [Id, setId] = useState(0)
  // function to get the id of a movie
  const handleId=(param)=>{
    setId(param)
  }
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route  path='/' element={<HomePage/>}/>
            <Route exact path='/Search' element={<Search/>}/>
            <Route exact path='/Movie/:id' element={<Movie/>}/>
            <Route exact path='/TVshow/:id' element={<TVshow/>}/>
              {/* for all movies */}
            <Route exact path='/AllMovies' element={<AllMovies/>}/>
            <Route exact path='/AllMovies2' element={<AllMovies2/>}/>
            <Route exact path='/AllMovies3' element={<AllMovies3/>}/>
            <Route exact path='/AllMovies4' element={<AllMovies4/>}/>
            <Route exact path='/AllMovies5' element={<AllMovies5/>}/>
            <Route exact path='/AllMoviesEnd' element={<AllMoviesEnd/>}/>
              {/* for anime section */}
            <Route exact path='/Anime' element={<Anime/>}/>
            <Route exact path='/Anime2' element={<Anime2/>}/>
            <Route exact path='/Anime3' element={<Anime3/>}/>
            <Route exact path='/Anime4' element={<Anime4/>}/>
            <Route exact path='/Anime5' element={<Anime5/>}/>
            <Route exact path='/AnimeEnd' element={<AnimeEnd/>}/>
              {/* for action movies */}
            <Route exact path='/Action' element={<Action/>}/>
            <Route exact path='/Action2' element={<Action2/>}/>
            <Route exact path='/Action3' element={<Action3/>}/>
            <Route exact path='/Action4' element={<Action4/>}/>
            <Route exact path='/Action5' element={<Action5/>}/>
            <Route exact path='/ActionEnd' element={<ActionEnd/>}/>

             {/* for comedy movies section */}
             <Route exact path='/Comedy' element={<Comedy/>}/>
             <Route exact path='/Comedy2' element={<Comedy2/>}/>
             <Route exact path='/Comedy3' element={<Comedy3/>}/>
             <Route exact path='/Comedy4' element={<Comedy4/>}/>
             <Route exact path='/Comedy5' element={<Comedy5/>}/>
             <Route exact path='/ComedyEnd' element={<ComedyEnd/>}/>
              {/* for latest movies TV show section */}
             <Route exact path='/LatestMovie' element={<LatestMovie/>}/>
             <Route exact path='/LatestMovie2' element={<LatestMovie2/>}/>
             <Route exact path='/LatestMovie3' element={<LatestMovie3/>}/>
             <Route exact path='/LatestMovie4' element={<LatestMovie4/>}/>
             <Route exact path='/LatestMovie5' element={<LatestMovie5/>}/>
             <Route exact path='/LatestMovieEnd' element={<LatestMovieEnd/>}/>
              {/* for latest TV show section */}
             <Route exact path='/LatestTvShows' element={<LatestTvShows/>}/>
             <Route exact path='/LatestTvShows2' element={<LatestTvShows2/>}/>
             <Route exact path='/LatestTvShows3' element={<LatestTvShows3/>}/>
             <Route exact path='/LatestTvShows4' element={<LatestTvShows4/>}/>
             <Route exact path='/LatestTvShows5' element={<LatestTvShows5/>}/>
             <Route exact path='/LatestTvShowsEnd' element={<LatestTvShowsEnd/>}/>
              {/* for most romance movies section */}
             <Route exact path='/Romance' element={<Romance/>}/>
             <Route exact path='/Romance2' element={<Romance2/>}/>
             <Route exact path='/Romance3' element={<Romance3/>}/>
             <Route exact path='/Romance4' element={<Romance4/>}/>
             <Route exact path='/Romance5' element={<Romance5/>}/>
             <Route exact path='/RomanceEnd' element={<RomanceEnd/>}/>
              {/* for most Sci-fi movies section */}
             <Route exact path='/Sci-fi' element={<SciFi/>}/>
             <Route exact path='/Sci-fi2' element={<SciFi2/>}/>
             <Route exact path='/Sci-fi3' element={<SciFi3/>}/>
             <Route exact path='/Sci-fi4' element={<SciFi4/>}/>
             <Route exact path='/Sci-fi5' element={<SciFi5/>}/>
             <Route exact path='/Sci-fiEnd' element={<SciFiEnd/>}/>
            
             <Route exact path='/MostPopular' element={<MostPopular2/>}/>
          </Routes>
        </Router>
      </div>
             
    </div>
    );
   }
export default App;


