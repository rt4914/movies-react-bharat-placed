import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useLocation } from "react-router-dom";

const options = (url, searchText) => {
  return {
    method: 'GET',
    url: url,
    params: {
      query: searchText,
      include_adult: 'false',
      language: 'en-US',
      page: '1'
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API}`
    }
  }
}

const Search = () => {
  const [searchData, setSearchData] = useState([])

  const location = useLocation()

  const getSearchData = () => {
    axios
      .request(options('https://api.themoviedb.org/3/search/movie', location?.search?.substring(3)))
      .then(function (response) {
        console.log(response.data);
        setSearchData(response.data.results)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(()=>{
    getSearchData();
  } ,[location?.search])

  return (
    <div className='space-y-8 lg:px-12 md:px-8 px-4 pt-16'>
      <h3 className='text-3xl text-bold mt-8'>Search results</h3>
      <div className='grid  grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8'>
        { searchData && searchData.map((movie) => {
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })}
      </div>
    </div>
  )
}

export default Search
