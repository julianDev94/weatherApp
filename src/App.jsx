import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioConsulta from "./components/FormularioConsulta";
import TituloPrincipal from "./components/TituloPrincipal";
import ClimaDisplay from "./components/ClimaDisplay";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <TituloPrincipal />
      <FormularioConsulta />
      <ClimaDisplay />
      <Footer></Footer>
    </>
  );
}

export default App;
