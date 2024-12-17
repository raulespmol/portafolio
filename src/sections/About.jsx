import { avatar } from "../assets/images"

const About = () => {
  return (
    <div className="flex py-40">
      <div>

      </div>
      <div className="flex items-center justify-center w-full gap-10">
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
        </div>
      </div>
    </div>
  )
}

export default About