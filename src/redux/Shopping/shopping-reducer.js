import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  books: [
    {
      id: 1,
      title: "Pride And Prejudice",
      description:
        "Pride and Prejudice is an 1813 novel of manners written by Jane Austen. ",
      price: 15.0,
      image:
        "https://i.thenile.io/r1000/9781515428091.jpg?r=5ca34f34277c0",
    },
    {
      id: 2,
      title: "The Fault In Our Stars",
      description:
        "The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 10, 2012.",
      price: 20.0,
      image:
        "https://th.bing.com/th/id/OIP.OHooyK5oVYbDzIoZAPEwjwHaLt?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "Everything Everything ",
      description:
      "the free encyclopedia Everything, Everything is the debut young adult novel by Jamaican-American author Nicola Yoon, first published by Delacorte Books for Young Readers in 2015",
      price: 30.0,
      image:
        "https://th.bing.com/th/id/OIP.kH-QV3uXOwR8uwSLUc51KQDLEy?pid=ImgDet&rs=1",
    },
    
    {
      id: 4,
      title: " The Sun Is Also a Star ",
      description:
      "The Sun Is Also a Star is Nicola Yoon 's second novel, which was released in 2016. ",
      price: 50.0,
      image:
        "https://cdn2.penguin.com.au/covers/400/9780552577564.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from books array
      const item = state.books.find(
        (book) => book.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
