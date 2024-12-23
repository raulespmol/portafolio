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
      <div className="flex items-center gap-5">
        {stack.map(tech => (
          <div className="flex items-center flex-col justify-between gap-2" key={tech.name}>
            <img src={tech.icon} alt={tech.name} width={48}/>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
      <a href={url} className="text-primary font-extrabold" target="_blank">VER PROYECTO</a>
    </div>
  )
}

export default ProjectCard