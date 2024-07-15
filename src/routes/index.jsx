import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"
import Search from "../pages/Search"
import Explore from "../pages/Explore"
import MovieDetail from "../pages/MovieDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: ":explore",
        element: <Explore />
      },
      {
        path: "/:explore/:id",
        element: <MovieDetail />
      },
    ]
  },
]);

export default router
