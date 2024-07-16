import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)

  return (
    <Link to={`movie/${movie.id}`}>
      <div className="w-[320px] rounded shadow-md relative">
        <img className="w-full h-full rounded" src={imageBaseUrl + movie.backdrop_path} />
        <div className="z-10 absolute bg-gradient-to-b from-transparent to-black bottom-0 p-2 flex flex-col items-start">
          <h2 className="font-medium text-white text-lg">{movie.title}</h2>
          <span className="flex items-center gap-2 mt-0 text-sm">
            <FaStar className='size-4'/>
            { Number(movie.vote_average).toFixed(1)}/10
          </span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
