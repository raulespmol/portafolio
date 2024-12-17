import { projects } from "../constants"

const Projects = () => {
  return (
    <div>
      {projects.map(p => (
        <div>
          <h3 className="text-xl text-primary">
            {p.title}
          </h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects