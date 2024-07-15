import axios from 'axios';
import { useEffect } from "react"

const Home = () => {

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API}`
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
      }
  ,[])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
