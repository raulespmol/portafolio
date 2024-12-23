import { About, Projects } from "../sections"

const Home = () => {
  return (
    <div>
      <section className="max-w-[1280px]">
        <About />
      </section>

      <div className="bg-white max-w-[1280px] p-3 rounded-lg border-gray-200 border-2 shadow-lg mb-24">
        <section>
          <Projects />
        </section>
      </div>
    </div>
  )
}

export default Home