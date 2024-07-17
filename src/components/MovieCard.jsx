import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import PlaceholderImage from '../assets/placeholder.png'
import LoadingImage from '../assets/loading.jpg'
import { useState } from "react";

const MovieCard = ({movie}) => {
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (event) => {
    event.target.src = PlaceholderImage;
  };

  return (
    <Link to={`movie/${movie.id}`}>
      <div className="w-[320px] rounded shadow-md relative">
        <LazyLoadImage
          className="w-[320px] h-[180px] rounded"
          alt={PlaceholderImage.alt}
          height={PlaceholderImage.height}
          src={isLoading ? LoadingImage : imageBaseUrl + movie.backdrop_path}
          onLoad={handleImageLoad}
          onError={handleImageError}
          width={PlaceholderImage.width} />
        <div className="w-full z-10 absolute bg-gradient-to-b from-transparent to-black bottom-0 p-2 flex flex-col items-start">
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
