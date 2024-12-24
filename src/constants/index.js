import { placeholder, mercadoLibros } from "../assets/images"
import { reactColor, bootstrapColor, nodeColor, postgresColor } from "../assets/icons"

export const navLinks = [
  {
    label: "Inicio",
    href: "/"
  },
  {
    label: "Proyectos",
    href: "/proyectos"
  },
  {
    label: "Contacto",
    href: "/"
  }
]

export const projects = [
  {
    title: "Mercado Libros",
    desc: "Proyecto final del bootcamp Desarrollo Fullstack de Desafio Latam. Plataforma de compra/venta de libros de segunda mano, con sistema de autenticación, creación de publicaciones y carrito de compras.",
    img: mercadoLibros,
    url: "https://mercadolibros.netlify.app/",
    stack: [
      { name: "React", icon: reactColor },
      { name: "Bootstrap", icon: bootstrapColor },
      { name: "Node.js", icon: nodeColor },
      { name: "PostgreSQL", icon: postgresColor }
    ]
  },
  {
    title: "Proyectos Académicos",
    desc: "Diferentes proyectos que he realizado durante mi formación en Desafío Latam, desde aplicaciones landing pages hasta aplicaciones web.",
    img: placeholder,
    stack: [
      { name: "React", icon: reactColor },
      { name: "Bootstrap", icon: bootstrapColor }
    ],
  }
]