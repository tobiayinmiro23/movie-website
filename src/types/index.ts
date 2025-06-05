export interface headerLinkI {
    id: number,
    genre?: string,
    displayName: string
}
export interface footerLinkI {
    id: number,
    name: string
}
export interface footerLinkImgI {
    id: number,
    img: string
}
export type resultI = [{
    poster_path: string,
    title: string
    id: string
    overview: string,
    name?: string
}]

export interface mappedresultI {
    poster_path: string,
    backdrop_path?: string
    title: string
    id: string
    overview: string,
    name?: string
}
export interface individualMovieI {
    budget: number
    genres: [{
        id: number
        name: string
    }]
    homepage: string
    popularity: number
    production_companies: [{
        id: number
        name: string
        origin_country: string
        logo_path: string
    }]
    production_countries: [{
        name: string
    }]
    spoken_languages: [{ english_name: string }]
    release_date: string
    revenue: number
    runtime: number
    tagline: string
    poster_path: string
    backdrop_path?: string
    title: string
    id: string
    overview: string,
    name?: string

}
export interface individualTVshowI {
    genres: [{
        id: number
        name: string
    }]
    homepage: string
    popularity: number
    created_by: [{
        name: string
        profile_path: string
        id: number
    }]
    production_companies: [{
        id: number
        name: string
        origin_country: string
        logo_path: string
    }]
    production_countries: [{
        name: string
    }]
    in_production: boolean
    spoken_languages: [{ english_name: string }]
    first_air_date: string
    last_air_date: string
    number_of_episodes: number
    number_of_seasons: number
    status: string
    runtime: number
    tagline: string
    poster_path: string
    backdrop_path?: string
    type: string
    id: string
    overview: string,
    name?: string

}
export interface cardI {
    results: resultI | null
    page: number
    genre?: string
    search?: string
    setpage: (page: number) => void
}

export interface searchBarI {
    search?: string
    searchMovie?: () => void
    setsearch?: React.Dispatch<React.SetStateAction<string>>
}

export interface fetchI {
    setloadMore?: React.Dispatch<React.SetStateAction<boolean>>
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    setresults: (data: resultI | null) => void
    setnoResult: React.Dispatch<React.SetStateAction<boolean>>
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    page?: number
    genre?: string
}
export interface fetchIndividualMovieI {
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setmovieData: (data: individualMovieI | null) => void
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    id: string | undefined
}
export interface fetchIndividualTVshowI {
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setmovieData: (data: individualTVshowI | null) => void
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    id: string | undefined
}
export interface searchI {
    setloading: React.Dispatch<React.SetStateAction<boolean>>
    setresults: (data: resultI | null) => void
    setnoResult: React.Dispatch<React.SetStateAction<boolean>>
    seterror: React.Dispatch<React.SetStateAction<boolean>>
    setdataReady: React.Dispatch<React.SetStateAction<boolean>>
    search: string
    page: number
    setpage: (data: number) => void
}
export interface loadMoreI {
    setloadMore: React.Dispatch<React.SetStateAction<boolean>>
    genre?: string
    results: resultI | null
    page?: number
    setpage: (data: number) => void
    search?: string
}
