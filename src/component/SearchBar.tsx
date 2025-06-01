import { searchBarI } from '../types'
import { useEffect, useRef } from 'react'

const SearchBar = ({ searchMovie, search, setsearch }: searchBarI) => {
    let focusInput = useRef<null | HTMLInputElement>(null)

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setsearch) setsearch(e.target.value)
    }
    const handleSearch = () => {
        if (search === '') focusInput.current?.focus()
        else if (searchMovie) searchMovie()
    }
    useEffect(() => {
        focusInput.current?.focus()
    }, [])
    return (
        <div className="w-[50%] cursor-pointer m-[auto] max-[1087px]:w-[70%] max-[774px]:w-[80%]  max-[580px]:w-[80%] max-[450px]:w-[85%] max-[423px]:w-[93%]">
            <input ref={focusInput} autoFocus={false} onChange={(e) => handleSearchInput(e)} placeholder='Search over 100m+ movies' className='focus:bg-[#f8f8fb] w-[80%] py-[0.6rem] px-[0.5rem] text-[1rem] rounded-l-lg cursor-pointer my-[1rem] outline-none border-[1px] b-[#d5d4d4]  max-[725px]:w-[75%] max-[615px]:w-[70%] max-[423px]:w-[70%] max-[397px]:w-[65%] max-[327px]:w-[60%]' type="text" />
            <button onClick={handleSearch} className=' w-[20%] py-[0.65rem] text-[1rem]  rounded-r-lg cursor-pointer outline-none border-none bg-[black] font-bold text-[white] max-[725px]:w-[25%] max-[615px]:w-[30%] max-[423px]:w-[30%] max-[397px]:w-[35%] max-[327px]:w-[40%]'>Search Movie</button>
        </div>
    )
}

export default SearchBar