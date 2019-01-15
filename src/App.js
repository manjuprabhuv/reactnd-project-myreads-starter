import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import createBrowserHistory from "history/createBrowserHistory";
import SearchBooks from "./components/SearchBooks";
import { catagorizeBooks } from "./utils/AppUtils";

const customHistory = createBrowserHistory();

class BooksApp extends React.Component {
  state = {
    usersBooks: new Map(),
    catagorizedBooks: {
      currentlyReading: new Set(),
      wantToRead: new Set(),
      read: new Set()
    }
  };

  async componentDidMount() {
    const data = await getAll();
    const books = catagorizeBooks(data);
    this.setState({
      usersBooks: books.usersBooks,
      catagorizedBooks: books.catagorizedBooks
    });
  }

  async updateBookShelf(book, newShelf) {
    await update(book, newShelf);
  }

  handleDropDownChanges = (book, newShelf) => {
    this.updateBookShelf(book, newShelf);
    this.setState(previousState => {
      if (!previousState.usersBooks.has(book.id)) {
        book.shelf = newShelf;
        previousState.usersBooks.set(book.id, book);
      }
      if (newShelf === "none") {
        previousState.usersBooks.delete(book.id);
      }
      Object.entries(previousState.catagorizedBooks).forEach(
        ([currentShelf, books]) => {
          if (currentShelf === newShelf) {
            previousState.usersBooks.get(book.id).shelf = newShelf;
            books.add(book.id);
          } else {
            books.delete(book.id);
          }
        }
      );
      return {
        catagorizedBooks: previousState.catagorizedBooks,
        usersBooks: previousState.usersBooks
      };
    });
  };

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <Route
            path="/search"
            history={customHistory}
            render={() => (
              <SearchBooks
                dropDownHandler={this.handleDropDownChanges}
                usersBooks={this.state.usersBooks}
              />
            )}
          />

          <Route
            exact
            path="/"
            history={customHistory}
            render={() => (
              <div className="index-page">
                <Header title="MyReads" />
                <ListBooks
                  usersBooks={this.state.usersBooks}
                  catagorizedBooks={this.state.catagorizedBooks}
                  dropDownHandler={this.handleDropDownChanges}
                />
              </div>
            )}
          />
          <div className="open-search">
            <Link to="/search">
              <button onClick={() => {}}>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
