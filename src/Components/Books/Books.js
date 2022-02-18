import React from "react";
import styles from "./Books.module.css";

// Redux
import { connect } from "react-redux";

import Book from "./Book/Book";

const Books = ({ books }) => {
  return (
    <div className={styles.books}>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.shop.books,
  };
};

export default connect(mapStateToProps)(Books);
