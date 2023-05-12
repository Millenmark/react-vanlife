import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts"
import { About, Home } from "./pages"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
