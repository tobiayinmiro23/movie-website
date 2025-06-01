import { useState, useEffect } from 'react'
import { Loader, Card, Footer } from '../AllFiles'
import { Fetch, FetchLatestMovies, FetchLatestTVshow } from '../fetch'
import { useNavigate } from 'react-router-dom'
import { headerLink } from '../data/headerData'
import { resultI } from '../types'

function Others() {
    let pathname: string = window.location.pathname.split('/')[1]
    const validRoute = headerLink.filter(item => item.displayName === pathname)
    const navigate = useNavigate()
    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [results, setresults] = useState<resultI | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const [noResult, setnoResult] = useState<boolean>(false)
    const [page, setpage] = useState<number>(1)
    const [genre, setgenre] = useState(validRoute[0]?.genre)

    function getData() {
        if (pathname === 'LatestMovie') FetchLatestMovies({ setloading, setdataReady, setnoResult, setresults, seterror, page })
        else if (pathname === 'LatestTvShows') FetchLatestTVshow({ setloading, setdataReady, setnoResult, setresults, seterror, page })
        else {
            setgenre(validRoute[0]?.genre)
            Fetch({ setloading, setdataReady, genre, setnoResult, setresults, seterror, page })
        }
    }

    useEffect(() => {
        if (validRoute.length === 0 && pathname !== 'AllMovies') navigate('/invalidRoute')
        else getData()
    }, [])

    return (
        <>
            <header className='bg-[black] py-[0.7rem] px-[0.2rem] text-[2.4rem] text-[white] text-center max-[588px]:text-[2rem] max-[470px]:text-[1.8rem] max-[470px]:p-[0.4rem]'>{pathname}</header>
            {loading && <Loader />}
            {dataReady && <Card results={results} page={page} setpage={setpage} genre={genre} />}
            {noResult && <h1 className='text-[2rem] mt-[3rem] mb-[16rem] text-center'>Oops, we could not find any result</h1>}
            {error && <h1 className='text-[2rem] mt-[3rem] mb-[16rem] text-center'>An error occured, please try again later</h1>}
            <Footer />
        </>
    )
}

export default Others