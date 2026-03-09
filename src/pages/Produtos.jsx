import produtos from "../data/produtos.json"
import Card from "../components/Card"

function Produtos(){

return(

<div className="container">

<h1>Produtos</h1>

<div className="grid">

{produtos.map(produto => (

<Card
key={produto.id}
titulo={produto.nome}
texto={produto.descricao}
imagem={produto.imagem}
/>

))}

</div>

</div>

)

}

export default Produtos