import Form from "react-bootstrap/Form";

const FormularioConsulta = () => {
  return (
    <section className="bg-secondary">
      <Form>
        <Form.Group className="mb-3" controlId="busquedaClimaCiudad">
          <Form.Control type="text" placeholder="Buscar por ciudad" minLength={3} maxLength={20} required />
        </Form.Group>
        <Button variant="dark" type="submit">
          Buscar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioConsulta;
