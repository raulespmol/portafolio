import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <header className="flex justify-between bg-white px-10 py-2 fixed top-0 left-0 w-full">
      <div>
        <h2 className="">[remo]</h2>
      </div>
      <div>
        <ul className="flex gap-40">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar