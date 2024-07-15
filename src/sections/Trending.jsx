import React from 'react'
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux"

const Trending = () => {
  const trendingData = useSelector((state) => state.movies.heroData)
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)
  return (
    <div className='space-y-8 lg:px-12 md:px-8 px-4 mt-12'>
      <h3 className='text-3xl text-bold'>Trending</h3>
      <div className='grid  grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8'>
        { trendingData && trendingData.map((movie) => {
          return(
            <div key={movie.id} className="rounded shadow-md relative">
              <img className="w-full h-full rounded" src={imageBaseUrl + movie.backdrop_path} />
              <div className="z-10 absolute bg-gradient-to-b from-transparent to-black bottom-0 p-2 flex flex-col items-start">
                <h2 className="font-medium text-white text-lg">{movie.title}</h2>
                <span className="flex items-center gap-2 mt-0 text-sm">
                  <FaStar className='size-4'/>
                  { Number(movie.vote_average).toFixed(1)}/10
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
