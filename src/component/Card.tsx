import { useState } from 'react'
import LoadMoreBtn from './LoadMoreBtn'
import { cardI } from '../types'
import { LoadMore, LoadMoreSearch, LoadMoreLatestMovie, LoadMoreLatestTVshows } from '../fetch'
import { Link } from 'react-router-dom'

const Card = ({ results, genre, setpage, page, search }: cardI) => {

    const [loadMore, setloadMore] = useState<boolean>(false)

    let path: string = window.location.pathname.split('/')[1]
    const LoadMoreNews = () => {
        setpage(++page)
        if (path === 'Search') LoadMoreSearch({ setloadMore, results, page, setpage, search })
        else if (path === 'LatestMovie') LoadMoreLatestMovie({ setloadMore, results, page, setpage })
        else if (path === 'LatestTvShows') LoadMoreLatestTVshows({ setloadMore, results, page, setpage })
        else LoadMore({ setloadMore, results, genre, page, setpage })

    }

    return (
        <div>
            <div className='Allmovies flex items-start justify-center flex-wrap m-[auto] max-w-[1200px] pt-[4rem] max-[380px]:m-[auto]'>
                {results?.map(data => {
                    return (
                        <div key={data.id} className="movieContainer my-[2rem] mx-[7rem] m-[auto] p-[1rem] max-[1150px]:my-[1.6rem] max-[1150px]:mx-[4rem] max-[950px]:my-[2.7rem] max-[950px]:p-[0rem] max-[868px]:mx-[2rem] max-[782px]:m-[1.6rem] max-[710px]:m-[1rem] max-[380px]:mx-[0.3rem] max-[346px]:m-[1rem]">
                            <div className="movieWrapper w-[19rem]  max-[346px]:w-[18rem] max-[307px]:w-[95%] max-[307px]:m-[auto]">
                                <div className='movieimg h-[15rem] '>
                                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='rounded-[0.2rem]' alt="movie img" />
                                </div>
                                <Link to={path === 'LatestTvShows' ? `/LatestTvShows/${data.id}` : `/Movie/${data.id}`}><h2 className='pl-[0.3rem] cursor-pointer text-[blue] underline text-[1.88rem]'>{path === 'LatestTvShows' ? data.name : data.title}</h2></Link>
                                <p className='pl-[0.3rem]  text-[1rem]'>{data.overview}</p>
                                <div className="btn mt-[1rem] w-[fit-content] pl-[0.3rem]">
                                    <button onClick={() => { alert(`downloading ${data.title}`) }} className='py-[0.77rem] px-[1rem] rounded-[0.15rem] text-[1rem] cursor-pointer outline-none border-none bg-[black] font-bold text-[white] max-[368px]:p-[0.8rem]'><h3>Download</h3></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='mb-[2rem] text-center'>
                {  // to determine wether to show the load more component
                    page !== 0 &&
                    <div>
                        {  // to determine wether to show the loading spinner animation or theload more button
                            loadMore ?
                                <div className="loadMoreAnime"></div>
                                :
                                <div onClick={LoadMoreNews}> <LoadMoreBtn /> </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Card