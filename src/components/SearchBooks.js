import React from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import SearchResults from "./SearchResults";

class SearchBooks extends React.Component {
  state = {
    query: "",
    searchResult: []
  };

  search(query) {
    if (query.length > 0) {
      search(query).then(data => {
        if (data.length > 0)
          this.setState(previousState => {
            if (previousState.query.length === 0) {
              data = [];
            }
            return {
              query: previousState.query,
              searchResult: [...data]
            };
          });
      });
    }
    if (query.length === 0) {
      this.setState({
        query: query.trim(),
        searchResult: []
      });
    } else {
      this.setState({
        query: query.trim()
      });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.search(event.target.value)}
            />
          </div>
        </div>
        <SearchResults
          results={this.state.searchResult}
          dropDownHandler={this.props.dropDownHandler}
          usersBooks={this.props.usersBooks}
        />
      </div>
    );
  }
}

export default SearchBooks;
