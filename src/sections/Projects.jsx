import { ProjectCard } from "../components"
import { projects } from "../constants"

const Projects = () => {
  return (
    <>
      <h2 className="text-5xl text-center text-primary my-5 font-ubuntu font-extrabold">Proyectos</h2>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 pt-5">
        {projects.map(project => (
          <ProjectCard 
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default Projects