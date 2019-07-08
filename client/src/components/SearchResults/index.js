import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const SearchResults = props => {
  // console.log(props);
      return (
        <div className="card mb-3">
        {props.books.map(book => (
          console.log(book),
          console.log(book.id),
        <li key={book.id} className="search-list list-group-item">
          <Row>
            <Col size="sm-3">
              <img src={`"${book.volumeInfo.imageLinks.smallThumbnail}"`}
              className="card-img" alt="..." />
            </Col>
            <Col size="md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {book.volumeInfo.title} 
                </h5>
                <p className="card-text">{book.searchInfo.textSnippet}  </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
            </Col>
          </Row>
        </li>
    ))}
      </div>
      )
};

export default SearchResults;
