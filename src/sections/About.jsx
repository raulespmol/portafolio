import { avatar } from "../assets/images"

const About = () => {
  return (
    <div className="flex py-40">
      <div>

      </div>
      <div className="flex items-center justify-center w-full gap-10 max-md:flex-col">
        <img 
          src={avatar} 
          alt="avatar"
          className="rounded-full object-cover"
          width={250}
        />
        <div>
          <span className="text-2xl">Hola! Mi nombre es</span>
          <p className="text-6xl font-ubuntu font-extrabold text-primary">Raúl Espinoza Molina</p>
          <h1 className="text-3xl mt-2">Desarrollador Fullstack</h1>
          <p className="">
            Metódico, organizado y siempre dispuesto a colaborar, me destaco por un
            aprendizaje rápido y por estar en constante evolución en el ámbito tecnológico.
            Enfocado en crear soluciones visuales y funcionales mediante aplicaciones web que
            integren diseño y tecnología de manera eficiente. Mi experiencia en composición y
            diseño me permite darle vida a interfaces atractivas y funcionales, mejorando tanto la
            estética como la experiencia del usuario.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About