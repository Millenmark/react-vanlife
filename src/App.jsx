import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts"
import { About, Home, Vans } from "./pages"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
