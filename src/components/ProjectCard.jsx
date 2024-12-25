import { Link, useNavigate } from "react-router"
import { Button, Image } from "@nextui-org/react"

const ProjectCard = ({id, title, desc, img, stack, url}) => {
  const navigate = useNavigate()

  return (
    <div className="bg-slate-100 rounded-lg shadow-sm p-3 flex flex-col justify-between">
      <div>
        <h4 className="text-3xl text-center font-semibold mb-4 text-gray-700">{title}</h4>
        <div className="w-full flex items-center justify-center mb-5">
          <Image 
            src={img} 
            alt={title}
          />
        </div>
        <p className="text-gray-500 mb-5">{desc}</p>
      </div>
      <div>
        <div className="flex items-center gap-5 mb-5">
          {stack.map(tech => (
            <div className="flex flex-col items-center justify-between h-max" key={tech.name}>
              <img src={tech.icon} alt={tech.name} width={48}/>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          
          {url && 
            <Button 
              color="primary"
              onPress={() => window.open(url, "_blank")}
            >
              Ir al Sitio
            </Button>
          }

          <Button 
            variant="ghost" 
            className="text-gray-500"
            onPress={() => navigate(`/proyectos/${id}`)}
          >
            Ver Detalles
          </Button>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard