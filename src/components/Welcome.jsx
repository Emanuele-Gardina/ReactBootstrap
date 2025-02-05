import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  return (
    <Container className="my-3">
      <Alert variant="success">Benvenuti nel nostro EPICO negozio di libri!</Alert>
      <h2 className="text-center">BOOKSHOP</h2>
    </Container>
  );
};
export default Welcome;
