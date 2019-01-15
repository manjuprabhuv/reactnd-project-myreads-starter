import React from "react";
import Book from "./Book";
import { bookSelfLookup } from "../utils/AppUtils";

const BookShelf =(props)=> {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {bookSelfLookup(props.shelfName)}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {[...props.books].map(bookId => {
              return (
                <li key={bookId}>
                  <Book
                    data={props.usersBooks.get(bookId)}
                    dropDownHandler={props.dropDownHandler}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  
}

export default BookShelf;
