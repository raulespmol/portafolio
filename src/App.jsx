import { Navbar } from "./components"
import { About, Projects } from "./sections"

function App() {
  return (
    <>
      <Navbar /> 
      <main className="bg-white max-w-[1280px] min-w-[1280px] p-3 rounded-md">
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
      </main>
    
    </>
  )
}

export default App
