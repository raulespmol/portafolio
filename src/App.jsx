import { Route, Routes } from "react-router"
import { Home, Projects, ProjectDetail } from "./views"
import { Navbar, Footer } from "./components"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyectos/:project" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
