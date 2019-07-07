import React from "react";
import "./style.css";

const SearchResults = props => {
  return (
    <div>
    <ul className="list-group search-results">
      {props.books.map(book => (
        <li key={book.key} className="list-group-item">
          <img alt="book" src={book} className="img-fluid" />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default SearchResults;
