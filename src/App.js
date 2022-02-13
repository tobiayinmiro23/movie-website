import { BrowserRouter as Router,Route ,Routes, useParams,Link } from 'react-router-dom';
import React, { useState } from 'react';

import Anime from './Anime';
import './App.css';
import Comedy from './Comedy';
import HomePage from './HomePage';
import LatestMovie from './LatestMovie';
import LatestTvShows from './LatestTvShows';
import MostPopular from './MostPopular';
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
import MostPopular2 from './MostPopular2';
import MostPopular3 from './MostPopular3';
import MostPopular4 from './MostPopular4';
import MostPopular5 from './MostPopular5';
import MostPopularEnd from './MostPopularEnd';
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

function App() {
  const link=useParams
  return (
    <div>
        <Router>
              <HomePage />
            <Routes>
              {/* all categories */}
              <Route path='/LatestMovie' element={<LatestMovie/>}/>
              <Route path='/AllMovies' element={<AllMovies/>}/>
              <Route path='/Search' element={<Search />}/>
              <Route path='/TVshow' element={<LatestTvShows/>}/>
              <Route path='/MostPopular' element={<MostPopular/>}/>
              <Route path='/Sci-fi' element={<SciFi/>}/>
              <Route path='/Comedy' element={<Comedy/>}/>
              <Route path='/Action' element={<Action/>}/>
              <Route path='/Romance' element={<Romance/>}/>
              <Route path='/Anime' element={<Anime/>}/>
              {/* for a particular movie */}
              <Route path='/Movie/:id' exact element={<Movie/>}/>
              <Route path='/TVshow/:id' exact element={<TVshow/>}/>
              {/* for all movies */}
              <Route path='/Allmovies2' exact element={<AllMovies2/>}/>
              <Route path='/Allmovies3' exact element={<AllMovies3/>}/>
              <Route path='/Allmovies4' exact element={<AllMovies4/>}/>
              <Route path='/Allmovies5' exact element={<AllMovies5/>}/>
              <Route path='/AllmoviesEnd' exact element={<AllMoviesEnd/>}/>
              {/* for action movies */}
              <Route path='/Action2' exact element={<Action2/>}/>
              <Route path='/Action3' exact element={<Action3/>}/>
              <Route path='/Action4' exact element={<Action4/>}/>
              <Route path='/Action5' exact element={<Action5/>}/>
              <Route path='/ActionEnd' exact element={<ActionEnd/>}/>
              {/* for anime section */}
              <Route path='/Anime2' exact element={<Anime2/>}/>
              <Route path='/Anime3' exact element={<Anime3/>}/>
              <Route path='/Anime4' exact element={<Anime4/>}/>
              <Route path='/Anime5' exact element={<Anime5/>}/>
              <Route path='/AnimeEnd' exact element={<AnimeEnd/>}/>
              {/* for comedy section */}
              <Route path='/Comedy2' exact element={<Comedy2/>}/>
              <Route path='/Comedy3' exact element={<Comedy3/>}/>
              <Route path='/Comedy4' exact element={<Comedy4/>}/>
              <Route path='/Comedy5' exact element={<Comedy5/>}/>
              <Route path='/ComedyEnd' exact element={<ComedyEnd/>}/>
              {/* for latest movie */}
              <Route path='/LatestMovie2' exact element={<LatestMovie2/>}/>
              <Route path='/LatestMovie3' exact element={<LatestMovie3/>}/>
              <Route path='/LatestMovie4' exact element={<LatestMovie4/>}/>
              <Route path='/LatestMovie5' exact element={<LatestMovie5/>}/>
              <Route path='/LatestMovieEnd' exact element={<LatestMovieEnd/>}/>
              {/* for latest tv show */}
              <Route path='/LatestTVshows' exact element={<LatestTvShows/>}/>
              <Route path='/LatestTVshows2' exact element={<LatestTvShows2/>}/>
              <Route path='/LatestTVshows3' exact element={<LatestTvShows3/>}/>
              <Route path='/LatestTVshows4' exact element={<LatestTvShows4/>}/>
              <Route path='/LatestTVshows5' exact element={<LatestTvShows5/>}/>
              <Route path='/LatestTVshowsEnd' exact element={<LatestTvShowsEnd/>}/>
              {/* for most popular */}
              <Route path='/MostPopular2' exact element={<MostPopular2/>}/>
              <Route path='/MostPopular3' exact element={<MostPopular3/>}/>
              <Route path='/MostPopular4' exact element={<MostPopular4/>}/>
              <Route path='/MostPopular5' exact element={<MostPopular5/>}/>
              <Route path='/MostPopularEnd' exact element={<MostPopularEnd/>}/>
                  {/* for romance section */}
              <Route path='/Romance2' exact element={<Romance2/>}/>
              <Route path='/Romance3' exact element={<Romance3/>}/>
              <Route path='/Romance4' exact element={<Romance4/>}/>
              <Route path='/Romance5' exact element={<Romance5/>}/>
              <Route path='/RomanceEnd' exact element={<RomanceEnd/>}/>
              {/* for romance section */}
              <Route path='/Sci-fi2' exact element={<SciFi2/>}/>
              <Route path='/Sci-fi3' exact element={<SciFi3/>}/>
              <Route path='/Sci-fi4' exact element={<SciFi4/>}/>
              <Route path='/Sci-fi5' exact element={<SciFi5/>}/>
              <Route path='/Sci-fiEnd' exact element={<SciFiEnd/>}/>
            </Routes>
        </Router>
    </div>
    );
   }
export default App;


      