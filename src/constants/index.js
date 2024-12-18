import { placeholder } from "../assets/images"

export const navLinks = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Proyectos",
    href: "/"
  },
  {
    label: "Contacto",
    href: "/"
  }
]

export const projects = [
  {
    title: "Proyecto 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptates a deserunt nisi ducimus sunt nostrum consectetur dolorem quod nam, minima praesentium quidem animi aliquid? Alias at molestias minima in?",
    img: placeholder,
    stack: ["React", "Bootstrap"]
  },
  {
    title: "Gestor de Tareas",
    desc: "Una aplicación simple para gestionar tareas diarias, permitiendo agregar, editar y eliminar tareas. Incluye filtros por prioridad y estado.",
    img: placeholder,
    stack: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    title: "E-commerce Store",
    desc: "Plataforma de comercio electrónico con carrito de compras, manejo de inventario y pasarela de pagos integrada. Optimizada para dispositivos móviles.",
    img: placeholder,
    stack: ["React", "Redux", "Bootstrap", "Node.js"],
  },
  {
    title: "Weather App",
    desc: "Aplicación del clima que utiliza una API pública para mostrar el estado del tiempo en tiempo real, pronóstico semanal y ubicación geográfica.",
    img: placeholder,
    stack: ["React", "CSS Modules", "OpenWeather API"],
  },
]