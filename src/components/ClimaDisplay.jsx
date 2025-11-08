import { Container, Card } from "react-bootstrap";

const ClimaDisplay = () => {
  return (
    <Container>
      <section className="my-5">
        <h3>Tiempo de </h3>
        <Container className="colorNoche text-white d-flex flex-column justify-content-center">
          <p>Nubes</p>
          <div className="d-flex">
            <div>temperatura</div>
            <div>presion humedad</div>
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default ClimaDisplay;
