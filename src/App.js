import MainLayout from "./components/AppLayout"
import { Route, Routes } from "react-router"

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<MainLayout/>}>

          </Route>
      </Routes>
  )
}

export default App
