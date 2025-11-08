import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioConsulta from "./components/FormularioConsulta";
import TituloPrincipal from "./components/TituloPrincipal";
import ClimaDisplay from "./components/ClimaDisplay";
function App() {
  return (
    <>
      <TituloPrincipal />
      <FormularioConsulta />
      <ClimaDisplay />
    </>
  );
}

export default App;
