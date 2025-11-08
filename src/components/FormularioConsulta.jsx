import Form from "react-bootstrap/Form";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";

const FormularioConsulta = ({ setCiudad }) => {
  const [inputCiudad, setInputCiudad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCiudad(inputCiudad.trim());
  };

  return (
    <section className="consultaClima">
      <Container>
        <Form className="py-3" onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={8}>
              <Form.Group className="mb-3" controlId="busquedaClimaCiudad">
                <Form.Control
                  type="text"
                  placeholder="Buscar por ciudad"
                  minLength={3}
                  maxLength={20}
                  required
                  onChange={(e) => setInputCiudad(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={2}>
              <Button variant="dark" type="submit">
                <i className="bi bi-search"></i> Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioConsulta;
