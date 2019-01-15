import React from "react";
import Book from "./Book";

const SearchResults = props => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.results.map(book => {
          if (props.usersBooks.has(book.id)) {
            book.shelf = props.usersBooks.get(book.id).shelf;
          }
          return (
            <li key={book.id}>
              <Book data={book} dropDownHandler={props.dropDownHandler} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default SearchResults;
