import { Box } from '../components'
import { projects } from '../constants'

const Projects = () => {
  return (
    <>
      <Box>
        <section>
          <h2 className="text-5xl text-center text-primary my-5 font-ubuntu font-extrabold">
            Proyectos
          </h2>
          <div>
            {projects.map((project, index) => (
              <div key={index} className="my-5">
                <h3 className="text-4xl text-primary font-ubuntu font-bold">
                  {project.title}
                </h3>
                <p className="text-xl text-primary font-ubuntu font-medium">
                  {project.desc}
                </p>
                <div className="flex justify-center items-center my-5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary text-white px-3 py-2 rounded-md font-ubuntu font-medium"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Box>
    </>
  )
}

export default Projects