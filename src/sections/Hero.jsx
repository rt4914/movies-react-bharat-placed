import { useSelector } from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroData = useSelector((state) => state.movies.heroData)
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)

  return (
    <div>
      <Carousel stopOnHover={true} showThumbs={false} showStatus={false}>
        { heroData && heroData.map((movie) => {
          return(
            <div key={movie.id}>
              <img className="w-full md:h-screen" src={imageBaseUrl + movie.backdrop_path} />
              <div className="w-full z-10 absolute bg-gradient-to-b from-transparent to-black bottom-0 pb-12 md:pb-20 lg:px-12 md:px-8 px-4 flex flex-col items-start">
                <h2 className="text-xl md:text-5xl font-medium text-white text-start">{movie.title}</h2>
                <p className="hidden md:flex mt-8 text-base text-gray-100 text-start lg:me-96">{movie.overview}</p>
                <span className="flex items-center gap-2 mt-4">
                  <FaStar />
                  { Number(movie.vote_average).toFixed(1)}/10
                </span>
                <Link to={`movie/${movie.id}`} className="mt-4 bg-black rounded px-3 py-2 border border-white hover:bg-gray-800">
                  Play Now
                </Link>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero