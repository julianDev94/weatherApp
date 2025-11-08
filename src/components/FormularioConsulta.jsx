import Form from "react-bootstrap/Form";

const FormularioConsulta = () => {
  return (
    <section className="bg-secondary">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Buscar por ciudad" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Buscar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioConsulta;
