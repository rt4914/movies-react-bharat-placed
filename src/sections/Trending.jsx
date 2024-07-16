import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";

const Trending = () => {
  const trendingData = useSelector((state) => state.movies.heroData)
  return (
    <div className='space-y-8 lg:px-12 md:px-8 px-4 mt-12'>
      <h3 className='text-3xl text-bold'>Trending</h3>
      <div className='grid  grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8'>
        { trendingData && trendingData.map((movie) => {
          return(
            <MovieCard key={movie.id} movie={movie} />
          )
        })}
      </div>
    </div>
  )
}

export default Trending
