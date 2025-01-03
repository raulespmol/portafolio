import { Link } from "react-router"
import { File, GitHub, LinkedIn } from "../assets/icons"
import { avatar } from "../assets/images"
import { Button } from "@material-tailwind/react"

const downloadCV = () => {
  const link = document.createElement("a")
  link.href = "/public/CV_Raul_Espinoza_Molina.pdf"
  link.download = "CV_Raul_Espinoza_Molina"
  link.click()
}

const About = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="flex items-center justify-center w-full gap-10 max-md:flex-col px-10">
        <img 
          src={avatar} 
          alt="avatar"
          className="rounded-full object-cover"
          width={400}
        />
        <div>
          <p className="text-2xl text-gray-500"><span className="text-primary">Hola!</span> Mi nombre es</p>
          <p className="text-6xl font-ubuntu font-extrabold text-primary">Raúl Espinoza Molina</p>
          <h1 className="text-3xl mt-2">Desarrollador Fullstack</h1>
          <div className="bg-gray-300 h-[1px] w-full my-3"></div>
          <div className="text-xl leading-relaxed text-pretty text-gray-500">
            <p className="mb-3">
              Metódico, organizado y siempre dispuesto a colaborar, me destaco por un
              aprendizaje rápido y por estar en constante evolución en el ámbito tecnológico.
            </p>
            <p className="mb-3">
              Enfocado en crear soluciones visuales y funcionales mediante aplicaciones web que
              integren diseño y tecnología de manera eficiente. Mi experiencia en composición y
              diseño me permite darle vida a interfaces atractivas y funcionales, mejorando tanto la
              estética como la experiencia del usuario.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <Button 
              onClick={downloadCV}
            >
              Descargar CV
            </Button>
            <Button 
            >
              <GitHub color="grey"/>
            </Button>
            <Button 
            >
              <LinkedIn color="grey"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About