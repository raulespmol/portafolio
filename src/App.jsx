import { Navbar } from "./components"
import { About, Projects } from "./sections"

function App() {
  return (
    <>
      <Navbar />

      <section className="max-w-[1280px]">
        <About />
      </section>

      <main className="bg-white max-w-[1280px] p-3 rounded-lg border-gray-200 border-2 shadow-lg">
        <section>
          <Projects />
        </section>
      </main>
    
    </>
  )
}

export default App
