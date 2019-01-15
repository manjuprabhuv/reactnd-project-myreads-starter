import React from "react";
import DropDown from "./DropDown";
import { bookShelfs, getBookAuthor } from "../utils/AppUtils";
import noImage from "../icons/noImage.png";

const Book = props => {
  let imageThumbnail =
    typeof props.data.imageLinks !== "undefined" &&
    props.data.imageLinks !== null
      ? props.data.imageLinks.thumbnail
      : noImage;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageThumbnail}")`
          }}
        />

        <DropDown
          dropdownVals={bookShelfs}
          default={props.data.shelf}
          clazzName="book-shelf-changer"
          data={props.data}
          dropDownHandler={props.dropDownHandler}
        />
      </div>
      <div className="book-title">{props.data.title}</div>
      <div className="book-authors">{getBookAuthor(props.data.authors)}</div>
    </div>
  );
};

export default Book;
