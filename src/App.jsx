import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHeroData, setImageBaseUrl } from "./redux/moviesSlice";

const options = (url) => {
  return {
    method: 'GET',
    url: url,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API}`
    }
  }

}

function App() {
  const dispatch = useDispatch()

  const getHeroData = () => {
    axios
      .request(options('https://api.themoviedb.org/3/trending/movie/day'))
      .then(function (response) {
        console.log(response.data);
        dispatch(setHeroData(response.data.results))
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const getImageBaseUrl = () => {
    axios
      .request(options('https://api.themoviedb.org/3/configuration'))
      .then(function (response) {
        console.log("imageurl: ", response.data.images.base_url + "original");
        dispatch(setImageBaseUrl(response.data.images.base_url + "original"))
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(()=>{
    getHeroData();
    getImageBaseUrl();
  } ,[])


  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
