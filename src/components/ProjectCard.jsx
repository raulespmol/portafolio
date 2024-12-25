import { Link } from "react-router"
import { Button, Image } from "@nextui-org/react"

const ProjectCard = ({title, desc, img, stack, url}) => {
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
          
          <Link to={url}>
            <Button color="primary">
              Ir al Sitio
            </Button> 
          </Link>

          <Link to={"/proyectos"}> {/* Cambiar a la ruta correcta */}
            <Button variant="ghost" className="text-gray-500">
              Ver Detalles
            </Button> 
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard