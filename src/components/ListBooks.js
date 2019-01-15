import React from "react";
import BookShelf from "./BookShelf";

const ListBooks =(props)=>{

    return (
      <div className="list-books-content">
        <div>
          {Object.entries(props.catagorizedBooks).map(([key, books]) => {
            return (
              <BookShelf
                usersBooks={props.usersBooks}
                key={key}
                shelfName={key}
                books={books}
                dropDownHandler={props.dropDownHandler}
              />
            );
          })}
        </div>
      </div>
    );

}

export default ListBooks;
