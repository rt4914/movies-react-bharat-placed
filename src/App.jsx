import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHeroData } from "./redux/moviesSlice";

function App() {

  const dispatch = useDispatch()

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
        dispatch(setHeroData(response.data.results))
      })
      .catch(function (error) {
        console.error(error);
      });
      }
  ,[])


  return (
    <div>
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  )
}

export default App
