import { NavLink } from "react-router"
import { navLinks } from "../constants"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-white px-10 py-2 fixed top-0 left-0 w-full">
      <div>
        <h2 className="font-ubuntu font-black text-3xl">[remo]</h2>
      </div>
      <div>
        <ul className="flex gap-40 items-center">
          {navLinks.map(link => (
            <li key={link.label}>
              <NavLink to={link.href}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar