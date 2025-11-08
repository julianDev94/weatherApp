import Form from "react-bootstrap/Form";
import { Button, Row, Col, Container } from "react-bootstrap";

const FormularioConsulta = () => {
  return (
    <section className="bg-secondary">
      <Container>
        <Form className="py-3">
          <Row>
            <Col md={8}>
              <Form.Group className="mb-3" controlId="busquedaClimaCiudad">
                <Form.Control
                  type="text"
                  placeholder="Buscar por ciudad"
                  minLength={3}
                  maxLength={20}
                  required
                  className="mx-3"
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button variant="dark" type="submit">
                Buscar <i class="bi bi-search"></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioConsulta;
