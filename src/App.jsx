import { Navbar } from "./components"
import { About, Projects } from "./sections"

function App() {
  return (
    <>
      <Navbar />

      <section className="max-w-[1280px]">
        <About />
      </section>

      <main className="bg-white max-w-[1280px] p-3 rounded-md">
        <section>
          <Projects />
        </section>
      </main>
    
    </>
  )
}

export default App
