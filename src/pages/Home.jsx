import CarouselHome from "../components/Carousel"
import Card from "../components/Card"

function Home(){

const servicos = [
{titulo:"Desenvolvimento Web", texto:"Criação de sites modernos", imagem:"https://picsum.photos/200?1"},
{titulo:"Aplicações React", texto:"Interfaces modernas", imagem:"https://picsum.photos/200?2"},
{titulo:"Design Responsivo", texto:"Sites para qualquer tela", imagem:"https://picsum.photos/200?3"},
{titulo:"Consultoria TI", texto:"Soluções tecnológicas", imagem:"https://picsum.photos/200?4"}
]

return(

<div>

<section className="hero">

<h1>Bem-vindo à TechSolutions</h1>

<p>
Criamos soluções digitais modernas para empresas que querem crescer no mundo online.
</p>

<button>Saiba Mais</button>

</section>

<div className="container">

<CarouselHome/>

<h2>Nossos Serviços</h2>

<div className="grid">

{servicos.map((servico,index)=>(
<Card
key={index}
titulo={servico.titulo}
texto={servico.texto}
imagem={servico.imagem}
/>
))}

</div>

</div>

</div>

)

}

export default Home