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
              {/* for home section */}
              {page==='/Home' && <HomePage page={handlePage} id={handleId}/> }
              {/* for search section */}
              {page==='/Search' && <Search page={handlePage} id={handleId}/>}
              {/* for a particular movie  */}
              {page==='/Movie' && <Movie page={handlePage} id={Id}/>}
              {/* for a particular tv show  */}
              {page==='/TVshow/:id' && <TVshow page={handlePage} id={Id}/>}

              {/* for all movies */}
              {page==='/Allmovies' && <AllMovies page={handlePage} id={handleId}/>}
              {page==='/Allmovies2' && <AllMovies2 page={handlePage} id={handleId}/>}
              {page==='/Allmovies3' && <AllMovies3 page={handlePage} id={handleId}/>}
              {page==='/Allmovies4' && <AllMovies4 page={handlePage} id={handleId}/>}
              {page==='/Allmovies5' && <AllMovies5 page={handlePage} id={handleId}/>}
              {page==='/AllmoviesEnd' && <AllMoviesEnd page={handlePage} id={handleId}/>}
              {/* for action movies section */}
              {page==='/Action' && <Action page={handlePage} id={handleId}/>}
              {page==='/Action2' && <Action2 page={handlePage} id={handleId}/>}
              {page==='/Action3' && <Action3 page={handlePage} id={handleId}/>}
              {page==='/Action4' && <Action4 page={handlePage} id={handleId}/>}
              {page==='/Action5' && <Action5 page={handlePage} id={handleId}/>}
              {page==='/ActionEnd' && <ActionEnd page={handlePage} id={handleId}/>}
              {/* for anime section */}
              {page==='/Anime' && <Anime page={handlePage} id={handleId}/>}
              {page==='/Anime2' && <Anime2 page={handlePage} id={handleId}/>}
              {page==='/Anime3' && <Anime3 page={handlePage} id={handleId}/>}
              {page==='/Anime4' && <Anime4 page={handlePage} id={handleId}/>}
              {page==='/Anime5' && <Anime5 page={handlePage} id={handleId}/>}
              {page==='/AnimeEnd' && <AnimeEnd page={handlePage} id={handleId}/>}
              {/* for comedy movies section */}
              {page==='/Comedy' && <Comedy page={handlePage} id={handleId}/>}
              {page==='/Comedy2' && <Comedy2 page={handlePage} id={handleId}/>}
              {page==='/Comedy3' && <Comedy3 page={handlePage} id={handleId}/>}
              {page==='/Comedy4' && <Comedy4 page={handlePage} id={handleId}/>}
              {page==='/Comedy5' && <Comedy5 page={handlePage} id={handleId}/>}
              {page==='/ComedyEnd' && <ComedyEnd page={handlePage} id={handleId}/>}
              {/* for latest movies TV show section */}
              {page==='/LatestMovie' && <LatestMovie page={handlePage} id={handleId}/>}
              {page==='/LatestMovie2' && <LatestMovie2 page={handlePage} id={handleId}/>}
              {page==='/LatestMovie3' && <LatestMovie3 page={handlePage} id={handleId}/>}
              {page==='/LatestMovie4' && <LatestMovie4 page={handlePage} id={handleId}/>}
              {page==='/LatestMovie5' && <LatestMovie5 page={handlePage} id={handleId}/>}
              {page==='/LatestMovieEnd' && <LatestMovieEnd page={handlePage} id={handleId}/>}
              {/* for latest TV show section */}
              {page==='/LatestTVshows' && <LatestTvShows page={handlePage} id={handleId}/>}
              {page==='/LatestTVshows2' && <LatestTvShows2 page={handlePage} id={handleId}/>}
              {page==='/LatestTVshows3' && <LatestTvShows3 page={handlePage} id={handleId}/>}
              {page==='/LatestTVshows4' && <LatestTvShows4 page={handlePage} id={handleId}/>}
              {page==='/LatestTVshows5' && <LatestTvShows5 page={handlePage} id={handleId}/>}
              {page==='/LatestTVshowsEnd' && <LatestTvShowsEnd page={handlePage} id={handleId}/>}
              {/* for most romance movies section */}
              {page==='/Romance' && <Romance page={handlePage} id={handleId}/>}
              {page==='/Romance2' && <Romance2 page={handlePage} id={handleId}/>}
              {page==='/Romance3' && <Romance3 page={handlePage} id={handleId}/>}
              {page==='/Romance4' && <Romance4 page={handlePage} id={handleId}/>}
              {page==='/Romance5' && <Romance5 page={handlePage} id={handleId}/>}
              {page==='/RomanceEnd' && <RomanceEnd page={handlePage} id={handleId}/>}
              {/* for most Sci-fi movies section */}
              {page==='/Sci-fi' && <SciFi page={handlePage} id={handleId}/>}
              {page==='/Sci-fi2' && <SciFi2 page={handlePage} id={handleId}/>}
              {page==='/Sci-fi3' && <SciFi3 page={handlePage} id={handleId}/>}
              {page==='/Sci-fi4' && <SciFi4 page={handlePage} id={handleId}/>}
              {page==='/Sci-fi5' && <SciFi5 page={handlePage} id={handleId}/>}
              {page==='/Sci-fiEnd' && <SciFiEnd page={handlePage} id={handleId}/>}
    </div>
    );
   }
export default App;


      