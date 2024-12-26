import { useParams } from "react-router"
import { projects } from "../constants"
import { Box } from "../components"

const ProjectDetail = () => {
  const { project } = useParams()
  const selectedProject = projects.find((p) => p.id === project)

  return (
    <Box>
      <div>{selectedProject.title}</div>
      <img src={selectedProject.img} alt={selectedProject.title}/>
    </Box>
  )
}

export default ProjectDetail