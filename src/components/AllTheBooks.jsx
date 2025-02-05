import { Component } from "react";
/* import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap"; */

import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {this.props.emanuele.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </div>
    );
  }
}
export default AllTheBooks;
