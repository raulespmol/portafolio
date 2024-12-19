const ProjectCard = ({title, desc, img, stack}) => {
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
      {<ul className="list-disc list-inside">
        {stack.map(tech => (
          <li key={tech}>
            {tech}
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default ProjectCard