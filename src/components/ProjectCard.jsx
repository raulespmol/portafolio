import { Link } from "react-router"
import Button from "./Button"

const ProjectCard = ({title, desc, img, stack, url}) => {
  return (
    <div className="bg-slate-100 rounded-md shadow-sm p-3">
      <h4 className="text-2xl text-center font-semibold mb-3">{title}</h4>
      <div className="w-full flex items-center justify-center mb-5">
        <img 
          src={img} 
          alt={title}
          className="contain-content"
        />
      </div>
      <p className="text-gray-500 mb-5">{desc}</p>
      {/* <div className="flex items-center gap-5">
        {stack.map(tech => (
          <div className="flex flex-col items-center justify-between h-max" key={tech.name}>
            <img src={tech.icon} alt={tech.name} width={48}/>
          </div>
        ))}
      </div> */}
      <div className="flex items-center gap-5">
        <Link to={"/proyectos"}> {/* Cambiar a la ruta correcta */}
          <Button>
            Ver Detalles
          </Button> 
        </Link>

        <Link to={url}>
          <Button>
            Ir al Sitio
          </Button> 
        </Link>

        <Link>
          
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard