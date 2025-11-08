import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioConsulta from "./components/FormularioConsulta";
import TituloPrincipal from "./components/TituloPrincipal";
function App() {
  return (
    <section>
      <TituloPrincipal />
      <FormularioConsulta />
    </section>
  );
}

export default App;
