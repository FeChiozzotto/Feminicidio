import NavProjeto from "../components/NavProjeto";
import Cards from "../components/Cards";
import Cabecalho from "../components/Cabecalho";
import Carrossel from "../components/Carrossel";
import "../App.css"
import NavRodape from "../components/NavRodape";
import CardPele from "../components/CardPele";
import CardEstados from "../components/CardEstados";
import CardMes from "../components/CardMes";
import CardGenero from "../components/CardGenero";

function Home() {
  return (
    <div>
      <Cabecalho />
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
        </div>
        <div className="home">
          <h1>Casos Feminicídio</h1>
        </div>
        <div className="card-group">
          <Cards />
          <CardPele />
          <CardEstados />
          <CardMes />
          <CardGenero />
        </div>
        <div>
          <NavRodape/>
        </div>
      </div>
    </div>
  );
}
export default Home;
