import { Button, Card } from "react-bootstrap";

const SingleBook = (props) => {
  console.log(props);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.price} €</Card.Text>
        <Button variant="primary">Aggiungi al Carrello</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
