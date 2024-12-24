import { Box } from "../components"
import { About, Projects } from "../sections"

const Home = () => {
  return (
    <div>
      <section className="max-w-[1280px]">
        <About />
      </section>

      <Box>
        <section>
          <Projects />
        </section>
      </Box>
    </div>
  )
}

export default Home