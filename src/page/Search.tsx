import { useState } from 'react'
import { SearchBar, Loader, Card, Footer } from '../AllFiles'
import { Search } from '../fetch'
import { resultI } from '../types'

function Others() {

    const [error, seterror] = useState<boolean>(false)
    const [dataReady, setdataReady] = useState<boolean>(false)
    const [results, setresults] = useState<resultI | null>(null)
    const [loading, setloading] = useState<boolean>(false)
    const [noResult, setnoResult] = useState<boolean>(false)
    const [search, setsearch] = useState<string>('')
    const [page, setpage] = useState<number>(1)

    function searchMovie() {
        Search({ setloading, setdataReady, setnoResult, setresults, seterror, search, page })
    }


    return (
        <>
            <header className='bg-[black] py-[0.7rem] px-[0.2rem] text-[2.4rem] mb-[4rem] text-[white] text-center max-[588px]:text-[2rem] max-[470px]:text-[1.8rem] max-[470px]:p-[0.4rem]'>Search</header>
            <SearchBar search={search} searchMovie={searchMovie} setsearch={setsearch} />
            {loading && <Loader />}
            {dataReady && <Card results={results} page={page} setpage={setpage} search={search} />}
            {noResult && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>Oops, we could not find any result</h1>}
            {error && <h1 className='text-[2rem] mt-[2rem] mb-[14rem] text-center'>An error occured, please try again later</h1>}
            <div className='mt-[15rem]'><Footer /></div>
        </>
    )
}

export default Others