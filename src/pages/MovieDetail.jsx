import axios from "axios"
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const options = (url) => {
  return {
    method: 'GET',
    url: url,
    params: {
      language: 'en-US'
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API}`
    }
  }
}

const MovieDetail = () => {
  const params = useParams()
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)
  const [movie, setMovie] = useState([])
  const [credits, setCredits] = useState([])

  const getMovieData = () => {
    axios
      .request(options(`https://api.themoviedb.org/3/movie/${params.id}`))
      .then(function (response) {
        setMovie(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const getCredits = () => {
    axios
      .request(options(`https://api.themoviedb.org/3/movie/${params.id}/credits`))
      .then(function (response) {
        console.log("credits," ,response.data)
        setCredits(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(()=>{
    getMovieData();
    getCredits();
  } ,[params?.id])

  return (
    <div>
      <img className="w-full md:h-screen" src={imageBaseUrl + movie.backdrop_path} />
      <div className="w-full z-10 absolute bg-gradient-to-b from-transparent to-black bottom-0 pb-12 md:pb-20 lg:px-12 md:px-8 px-4 flex flex-col items-start">
        <h2 className="text-xl md:text-5xl font-medium text-white text-start">{movie.title}</h2>
      </div>
      <div className="pb-12 md:pb-20 lg:px-12 md:px-8 px-4">
        <p className="hidden md:flex mt-8 text-base text-gray-100 text-start lg:me-96">{movie.overview}</p>
        { movie.vote_average && 
          <span className="flex items-center gap-2 mt-4">
            <FaStar />
            { Number(movie.vote_average || 0).toFixed(1)}/10
          </span>
        }
        { movie.genres && movie.genres.length > 0 && 
          <div className="flex gap-4 items-center mt-4">
            {movie.genres.map((genre) => {
              return (
                <p key={genre.id} className="border border-white opacity-80 px-2 py-1 rounded">{genre.name}</p>
              )
            })}
          </div>
        }
        
        { credits?.cast && credits.cast.length > 0 && 
          <div className="mt-12 grid grid-cols-8 gap-4 items-center">
            {credits.cast.map((castMember) => {
              return (
                <div key={castMember.id} className="flex flex-col items-center">
                  <img className="w-12 h-12 rounded-full object-cover" src={imageBaseUrl + castMember.profile_path} />
                  <p className="px-2 py-1 text-sm">{castMember.name}</p>
                </div>
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default MovieDetail
