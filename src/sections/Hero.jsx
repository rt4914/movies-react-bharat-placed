import { useSelector } from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const heroData = useSelector((state) => state.movies.heroData)
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)

  return (
    <div>
      <Carousel stopOnHover={true} showThumbs={false} showStatus={false}>
        { heroData && heroData.map((movie) => {
          return(
            <div key={movie.id} className="h-screen">
              <img className="w-full h-screen" src={imageBaseUrl + movie.backdrop_path} />
              <div className="z-10 absolute bottom-20 px-12 flex flex-col items-start">
                <h2 className="text-5xl font-medium text-white">{movie.title}</h2>
                <p className="mt-8 text-base text-gray-100 text-start lg:me-96">{movie.overview}</p>
                <span className="flex items-center gap-2 mt-4">
                  <FaStar />
                  { Number(movie.vote_average).toFixed(1)}/10
                </span>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero