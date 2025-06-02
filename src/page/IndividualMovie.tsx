import { useState, useEffect } from 'react'
import { Loader } from '../AllFiles'
import { useParams } from 'react-router-dom';
import { FetchIndividualMovie } from '../fetch';
import { individualMovieI } from '../types';


const IndividualMovie = () => {
    const id = useParams().id
    const [movieData, setmovieData] = useState<individualMovieI | null>(null)
    const [loading, setloading] = useState<boolean>(true)
    const [error, seterror] = useState<boolean>(false)
    useEffect(() => {
        FetchIndividualMovie({ setloading, setmovieData, seterror, id })
    }, [])
    return (
        <div className='m-[auto] w-[100%]'>
            {loading && <Loader />}
            {error && <h1 className='text-center text-[2rem] mt-[9rem] font-bold w-[100%]'>An error occured please try again later</h1>}
            {movieData?.id && <div key={movieData?.id} className="w-[fit-content] m-[auto] mt-[2rem]  ">
                <div className="movieWrapper w-[85%] m-[auto] max-[346px]:w-[18rem] max-[607px]:w-[95%] max-[307px]:m-[auto]">
                    <div className='movieimg h-[40rem] max-[687px]:h-[35rem] max-[567px]:h-[30rem] max-[457px]:h-[25rem] max-[387px]:h-[20rem]'>
                        <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} className='rounded-[0.3rem]' alt="movie img" />
                    </div>
                    <h2 className='pl-[0.3rem] cursor-pointer font-bold text-[1.88rem] mb-[0.6rem]'>{movieData.title}</h2>
                    <div>
                        <div className='pl-[0.3rem] mb-[1rem]' >
                            <h3 className='font-bold'>Overview</h3>
                            <p className='text-[1rem]'>{movieData?.overview}</p>
                        </div>
                        <div className='pl-[0.3rem] mb-[1rem]' >
                            <h3 className='font-bold'>Release Date</h3>
                            <p className='text-[1rem]'>{movieData?.release_date}</p>
                        </div>
                        {
                            movieData?.budget !== 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Budget</h3>
                                <p className='text-[1rem]'>${movieData?.budget?.toLocaleString()}</p>
                            </div>
                        }
                        {
                            movieData?.revenue !== 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Revenue</h3>
                                <p className='text-[1rem]'>${movieData?.revenue?.toLocaleString()}</p>
                            </div>
                        }
                        {movieData.runtime > 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Runtime</h3>
                                <p className='text-[1rem]'>{movieData.runtime} minutes</p>
                            </div>
                        }
                        {
                            movieData.homepage !== '' &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Website</h3>
                                <a href={movieData.homepage} className='text-[1rem] text-[red]'>link</a>
                            </div>
                        }
                        <div className='pl-[0.3rem] mb-[1rem]' >
                            <h3 className='font-bold'>Tagline</h3>
                            <p className='text-[1rem]'>{movieData?.tagline}</p>
                        </div>
                        {
                            movieData?.popularity !== 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Popularity</h3>
                                <p className='text-[1rem]'>{movieData?.popularity}</p>
                            </div>
                        }
                        {movieData?.genres?.length > 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Genres</h3>
                                <div>
                                    {movieData.genres.map((item) => <p key={item.id} className='text-[1rem] mr-[2rem]'>{item.name}</p>)}
                                </div>
                            </div>

                        }
                        {
                            movieData.production_companies.length > 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold mb-[0.4rem]'>Production Companie(s)</h3>
                                <div >
                                    {movieData.production_companies.map(item => {
                                        return <div key={item.id} className='mr-[3rem] mb-[1rem] '>
                                            <div >
                                                <div className='w-[4rem] h-[fit-content]'><img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} className='rounded-[0.3rem]' alt="movie img" /></div>
                                                <p className='text-[1rem] mr-[2rem] mb-[0.3rem] '>{item.name}</p>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        }
                        {
                            movieData.production_countries.length > 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Production Countries</h3>
                                <div className='flex items-center'>
                                    {movieData.production_countries.map((item) => <p key={item.name} className='text-[1rem] mr-[2rem]'>{item.name}</p>)}
                                </div>
                            </div>
                        }
                        {
                            movieData.spoken_languages.length > 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Spoken Languages</h3>
                                <div>
                                    {movieData.spoken_languages.map((item) => <p key={item.english_name} className='text-[1rem] mr-[2rem]'>{item.english_name}</p>)}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="btn mt-[1rem] mb-[5rem] w-[fit-content] pl-[0.3rem]">
                        <button onClick={() => { alert(`downloading ${movieData?.title}`) }} className='py-[0.77rem] px-[1rem] rounded-[0.15rem] text-[1rem] cursor-pointer outline-none border-none bg-[black] font-bold text-[white] max-[368px]:p-[0.8rem]'><h3>Download</h3></button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default IndividualMovie
