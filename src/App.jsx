import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

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
