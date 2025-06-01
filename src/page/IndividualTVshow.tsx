import { useState, useEffect } from 'react'
import { Loader } from '../AllFiles'
import { useParams } from 'react-router-dom';
import { FetchIndividualTVshow } from '../fetch';
import { individualTVshowI } from '../types';


const IndividualTVshow = () => {
    const id = useParams().id
    const [movieData, setmovieData] = useState<individualTVshowI | null>(null)
    const [loading, setloading] = useState<boolean>(true)
    const [error, seterror] = useState<boolean>(false)
    useEffect(() => {
        FetchIndividualTVshow({ setloading, setmovieData, seterror, id })
    }, [])

    return (
        <div className='m-[auto] w-[100%]'>
            {loading && <Loader />}
            {error && <h1 className='text-center text-[2rem] mt-[9rem] font-bold w-[100%]'>An error occured please try again later</h1>}
            {movieData?.id && <div key={movieData?.id} className="w-[fit-content] m-[auto] mt-[2rem]  ">
                <div className="movieWrapper w-[85%] m-[auto] max-[307px]:w-[95%] max-[307px]:m-[auto]">
                    <div className='w-[100%] h-[40rem] max-[687px]:h-[35rem] max-[567px]:h-[30rem] max-[457px]:h-[25rem] max-[387px]:h-[20rem]'>
                        <img src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`} className='rounded-[0.3rem]' alt="movie img" />
                    </div>
                    <h2 className='pl-[0.3rem] cursor-pointer font-bold text-[1.88rem]'>{movieData.name}</h2>
                    <div>
                        {
                            movieData?.overview !== '' &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Overview</h3>
                                <p className='text-[1rem]'>{movieData?.overview}</p>
                            </div>
                        }
                        <div className='pl-[0.3rem] mb-[1rem]' >
                            <h3 className='font-bold'>In Production</h3>
                            <p className='text-[1rem]'>{movieData?.in_production ? 'true' : 'false'}</p>
                        </div>
                        {
                            movieData?.first_air_date !== '' &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>First Air Date</h3>
                                <p className='text-[1rem]'>{movieData?.first_air_date}</p>
                            </div>
                        }
                        {
                            movieData?.last_air_date !== '' &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Last Air Date</h3>
                                <p className='text-[1rem]'>{movieData?.last_air_date}</p>
                            </div>
                        }
                        {
                            movieData.homepage !== '' &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Website</h3>
                                <a href={movieData.homepage} className='text-[1rem] text-[red]'>link</a>
                            </div>
                        }
                        {
                            movieData?.tagline !== '' &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Tagline</h3>
                                <p className='text-[1rem]'>{movieData?.tagline}</p>
                            </div>
                        }
                        {
                            movieData?.popularity !== 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Popularity</h3>
                                <p className='text-[1rem]'>{movieData?.popularity}</p>
                            </div>
                        }
                        {
                            movieData?.number_of_seasons !== 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Number of Seasons</h3>
                                <p className='text-[1rem]'>{movieData?.number_of_seasons}</p>
                            </div>
                        }
                        {
                            movieData?.number_of_episodes !== 0 &&
                            <div className='pl-[0.3rem] mb-[1rem]' >
                                <h3 className='font-bold'>Number of episodes</h3>
                                <p className='text-[1rem]'>{movieData?.number_of_episodes}</p>
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
                                <h3 className='font-bold'>Production Companie(s)</h3>
                                <div className='flex items-end'>
                                    {movieData.production_companies.map(item => {
                                        return <div key={item.id} className='mr-[3rem]'>
                                            <div className='mb-[1rem]'>
                                                <div className='w-[4rem] h-[fit-content]'><img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} className='rounded-[0.3rem]' alt="movie img" /></div>
                                                <p className='text-[1rem] mr-[2rem]'>{item.name}</p>
                                            </div>
                                            {item.origin_country !== '' &&
                                                <div>
                                                    <h3 className='font-bold'>Country of origin</h3>
                                                    <p>{item.origin_country}</p>
                                                </div>
                                            }
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
                        <div className='pl-[0.3rem] mb-[1rem]' >
                            <h3 className='font-bold'>Status</h3>
                            <p>{movieData.status}</p>

                        </div>
                        <div className='pl-[0.3rem] mb-[1rem]' >
                            <h3 className='font-bold'>Type</h3>
                            <p>{movieData.type}</p>

                        </div>
                    </div>
                    <div className="btn mt-[1rem] mb-[5rem] w-[fit-content] pl-[0.3rem]">
                        <button onClick={() => { alert(`downloading ${movieData?.name}`) }} className='py-[0.77rem] px-[1rem] rounded-[0.15rem] text-[1rem] cursor-pointer outline-none border-none bg-[black] font-bold text-[white] max-[368px]:p-[0.8rem]'><h3>Download</h3></button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default IndividualTVshow