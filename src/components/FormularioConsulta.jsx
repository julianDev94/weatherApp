import Form from "react-bootstrap/Form";
import { Button, Row, Col, Container } from "react-bootstrap";

const FormularioConsulta = ({setCiudad}) => {
  return (
    <section className="consultaClima">
      <Container>
        <Form className="py-3">
          <Row>
            <Col sm={12} md={8}>
              <Form.Group className="mb-3" controlId="busquedaClimaCiudad">
                <Form.Control
                  type="text"
                  placeholder="Buscar por ciudad"
                  minLength={3}
                  maxLength={20}
                  required
                  onChange={(e)=>setCiudad(e.target.value)}
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
