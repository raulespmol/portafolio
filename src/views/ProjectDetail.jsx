import { useParams } from "react-router"
import { projects } from "../constants"
import { Image } from "@nextui-org/react"
import { Box } from "../components"

const ProjectDetail = () => {
  const { project } = useParams()
  const selectedProject = projects.find((p) => p.id === project)

  return (
    <Box>
      <div>{selectedProject.title}</div>
      <Image src={selectedProject.img} alt={selectedProject.title}/>
    </Box>
  )
}

export default ProjectDetail