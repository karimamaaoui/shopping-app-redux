import React from "react";
import { Link } from "react-router-dom";
import styles from "./Book.module.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shopping/shopping-actions";

const Book = ({ book, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.book}>
      <img
        className={styles.book__image}
        src={book.image}
        alt={book.title}
      />

      <div className={styles.book__details}>
        <p className={styles.details__title}>{book.title}</p>
        <p className={styles.details__desc}>{book.description}</p>
        <p className={styles.details__price}>$ {book.price}</p>
      </div>

      <div className={styles.book__buttons}>
        <Link to={`/book/${book.id}`}>
          <button
            onClick={() => loadCurrentItem(book)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(book.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
