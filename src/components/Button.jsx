const Button = ({children}) => {
  return (
    <button className="bg-primary py-2 px-4 text-white rounded-md text-xl">
      {children}
    </button>
  )
}

export default Button