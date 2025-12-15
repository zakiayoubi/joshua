import About from "./About/About"
import Project from "./projects/Project"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutme" element={<About />}/>
        <Route path="/" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
