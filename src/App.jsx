import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioConsulta from "./components/FormularioConsulta";
import TituloPrincipal from "./components/TituloPrincipal";
import ClimaDisplay from "./components/ClimaDisplay";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";



function App() {
  const [clima, setClima] = useState({});
  const [ciudad, setCiudad] = useState("");

  useEffect(()=>{
    consultaAPI();
  },[]);

  const consultaAPI = async () =>{
    const apiKey = "278f9f00026e70711f4fffe4a00476a1";
    const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tucuman&appid=${apiKey}&lang=es`);
    const datosBody = await respuesta.json();
    console.log(datosBody);
    setClima(datosBody);
  }

  return (
    <>
      <section className="seccionPrincipal">
        <TituloPrincipal />
        <FormularioConsulta setCiudad={setCiudad} />
        <ClimaDisplay clima={clima} />
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
