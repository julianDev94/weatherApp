import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioConsulta from "./components/FormularioConsulta";
import TituloPrincipal from "./components/TituloPrincipal";
import ClimaDisplay from "./components/ClimaDisplay";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState("");
  

  useEffect(() => {
    consultaAPI();
  }, [ciudad]);

  const consultaAPI = async () => {
    const apiKey = "278f9f00026e70711f4fffe4a00476a1";
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&lang=es`
    );
    const datosBody = await respuesta.json();
    setClima(datosBody);
  };

  const displayClima = !ciudad ? (
    <Container className="text-center my-5">
      <h4>🌦️ Ingrese una ciudad para consultar el clima</h4>
      <p>Por ejemplo: "Buenos Aires", "Madrid" o "Tucumán"</p>
    </Container>
  ) : (
    <ClimaDisplay clima={clima} />
  );

  return (
    <>
      <section className="seccionPrincipal">
        <TituloPrincipal />
        <FormularioConsulta setCiudad={setCiudad} />
        {displayClima}
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
