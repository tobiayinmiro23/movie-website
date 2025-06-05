import axios from "axios";
import { fetchI, loadMoreI, mappedresultI, searchI, fetchIndividualMovieI, fetchIndividualTVshowI } from "../types";
const apiKey = import.meta.env.VITE_API_KEY;
// for fetching movies from a particular genre like war, adventure, comedy etc
export function Fetch({ setloading, setdataReady, setresults, setnoResult, seterror, page, genre }: fetchI) {
    setloading(true)
    setdataReady(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&page=${page}`
    };
    axios.request(options).then(res => {
        setloading(false)
        if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            setdataReady(true)
        }
    }).catch(err => {
        seterror(true)
        console.log(err)
        setdataReady(false)
        setloading(false)
    })
}
// for fetching the latest tv shows 
export function FetchLatestTVshow({ setloading, setdataReady, setresults, setnoResult, seterror, page }: fetchI) {
    setloading(true)
    setdataReady(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=${page}`
    };
    axios.request(options).then(res => {
        setloading(false)
        if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            setdataReady(true)
        }
    }).catch(err => {
        seterror(true)
        console.log(err)
        setdataReady(false)
        setloading(false)
    })
}
// for fetching latest movies  
export function FetchLatestMovies({ setloading, setdataReady, setresults, setnoResult, seterror, page }: fetchI) {
    setloading(true)
    setdataReady(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}`
    };
    axios.request(options).then(res => {
        setloading(false)
        if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            setdataReady(true)
        }
    }).catch(err => {
        seterror(true)
        console.log(err)
        setdataReady(false)
        setloading(false)
    })
}
// for searching for a movie 
export function Search({ setloading, setdataReady, setresults, setnoResult, seterror, search, page, setpage }: searchI) {
    setloading(true)
    setnoResult(false)
    setresults(null)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=${page}&`
    };
    axios.request(options).then(res => {
        setloading(false)
        if (res.data.page === res.data.total_pages) setpage(0)
        if (res?.data.results?.length === 0) setnoResult(true)
        else {
            setresults(res?.data.results)
            setdataReady(true)
        }
    }).catch(err => {
        console.log(err)
        seterror(true)
        setloading(false)
    })
}
// for fetching a specific movie from 
export function FetchIndividualMovie({ setloading, setmovieData, seterror, id }: fetchIndividualMovieI) {
    setloading(true)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    };
    axios.request(options).then(res => {
        setloading(false)
        setmovieData(res?.data)
    }).catch(err => {
        seterror(true)
        console.log(err)
        setloading(false)
    })
}
// for fetching a specific movie from the latest tv shows section
export function FetchIndividualTVshow({ setloading, setmovieData, seterror, id }: fetchIndividualTVshowI) {
    setloading(true)
    seterror(false)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`
    };
    axios.request(options).then(res => {
        setloading(false)
        setmovieData(res?.data)
    }).catch(err => {
        seterror(true)
        console.log(err)
        setloading(false)
    })
}
// for loading more movies in a particular genre like action, drama, crime etc
export function LoadMore({ setloadMore, results, genre, page, setpage }: loadMoreI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&page=${page}`
    };
    axios.request(options).then(res => {
        res?.data.results.map((item: mappedresultI) => results?.push(item))
        if (res.data.page === res.data.total_pages) setpage(0)
        setloadMore(false)
    }).catch(err => {
        console.log(err)
        setloadMore(false)
    })
}
// for loading more movies from a particular search result
export function LoadMoreSearch({ setloadMore, results, page, search, setpage }: loadMoreI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&page=${page}&`
    };
    axios.request(options).then(res => {
        res?.data.results.map((item: mappedresultI) => results?.push(item))
        if (res.data.page === res.data.total_pages) setpage(0)
        setloadMore(false)
    }).catch(err => {
        console.log(err)
        setloadMore(false)
    })
}
// for loading more movies from the latest tv shows section
export function LoadMoreLatestTVshows({ setloadMore, results, page, setpage }: loadMoreI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0&page=${page}`
    };
    axios.request(options).then(res => {
        res?.data.results.map((item: mappedresultI) => results?.push(item))
        if (res.data.page === res.data.total_pages) setpage(0)
        setloadMore(false)
    }).catch(err => {
        console.log(err)
        setloadMore(false)
    })
}
// for loading more movies from the latest movies section
export function LoadMoreLatestMovie({ setloadMore, results, page, setpage }: loadMoreI) {
    setloadMore(true)
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}`
    };
    axios.request(options).then(res => {
        res?.data.results.map((item: mappedresultI) => results?.push(item))
        if (res.data.page === res.data.total_pages) setpage(0)
        setloadMore(false)
    }).catch(err => {
        console.log(err)
        setloadMore(false)
    })
}
