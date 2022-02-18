import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarList.css";
import {BsCart} from 'react-icons/bs'
import { connect } from "react-redux";

const NavbarList = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" >Redux Shopping Cart</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="navbar__book active">
        <a className="cart__title" href="/">Books <span className="sr-only">(current)</span></a>
      </li>

  
      <div className="navbar__cart">
      <Link to="/cart">
        <div className="navbar__cart">
          <div className="cart__title">Cart</div>
          <BsCart/>        
          <div className="cart__counter">{cartCount}</div>
        </div>
      </Link>
   

      </div>

     </ul>
  </div>
</nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(NavbarList);
