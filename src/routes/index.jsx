import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"
import Search from "../pages/Search"
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
        path: "/movie/:id",
        element: <MovieDetail />
      },
    ]
  },
]);

export default router
