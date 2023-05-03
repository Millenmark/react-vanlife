import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/" element={<h1>Hello World</h1>}/>
          <Route path="/about" element={<h1>This is an about page</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
