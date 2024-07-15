import { useSelector } from "react-redux"

const Home = () => {
  const heroData = useSelector((state) => state.movies.heroData)

  console.log("home: ", heroData)

  return (
    <div>
      Home
    </div>
  )
}

export default Home
