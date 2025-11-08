import { Container, Card } from "react-bootstrap";

const ClimaDisplay = ({ clima }) => {
  let temperaturaCelsius = clima.main?.temp ? (clima.main.temp - 273.15).toFixed(1)
    : null;
  let sensacionTermina = clima.main?.feels_like ? (clima.main?.feels_like - 273.15).toFixed(1) : null;
  return (
    <Container>
      <section className="my-5">
        <h3>Tiempo de {clima.name}</h3>
        <Container className="colorNoche text-white d-flex flex-column justify-content-center">
          <p>{clima.weather?.[0]?.description}</p>
          <div className="d-flex">
            <div>
              <p>Temperatura: {temperaturaCelsius}</p>
              <span>Sensacion Termica: {sensacionTermina}</span>
            </div>
            <div>
              {/* <p>{clima.main.pressure}</p>
              <span>{clima.main.humidity}%</span> */}
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default ClimaDisplay;
