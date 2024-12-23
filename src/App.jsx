import { Route, Routes } from "react-router"
import { Home, Projects } from "./views"
import { Navbar, Footer } from "./components"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
