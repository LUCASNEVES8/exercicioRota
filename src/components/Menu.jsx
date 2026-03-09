import { Link } from "react-router-dom"

function Menu() {
  return (
    <nav className="menu">

      <h2 className="logo">TechSolutions</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
      </div>

    </nav>
  )
}

export default Menu