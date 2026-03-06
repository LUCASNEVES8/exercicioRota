import { Link } from "react-router-dom"

function Menu() {
  return (
    <nav style={styles.menu}>
      <h2>TechSolutions</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  )
}

const styles = {
  menu: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "#222",
    color: "white"
  }
}
export default Menu