import { useSelector } from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  const heroData = useSelector((state) => state.movies.heroData)
  const imageBaseUrl = useSelector((state) => state.movies.imageBaseUrl)

  return (
    <div>
      <Carousel>
        { heroData && heroData.map((movie, index) => {
          return(
            <div key={movie.id}>
              <img src={imageBaseUrl + movie.backdrop_path} />
              <p className="legend">Legend 1</p>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Hero