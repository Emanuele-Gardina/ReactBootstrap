import { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import fantasy from "../assets/books/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {fantasy.map((book) => (
          <Card key={`book-${book.asin}`} style={{ width: "18rem", display: "inline-block", verticalAlign: "top" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price} €</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default AllTheBooks;
