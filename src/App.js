import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from "react-redux";

// Pages
import NavbarList from "./Components/Nabar/NavbarList";
import Books from "./Components/Books/Books";
import Cart from "./Components/Cart/Cart";
import SingleItem from "./Components/SingleItem/SingleItem";


function App({ current }) {
  return (
    <Router>
      <div>
      <NavbarList />

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/cart" element={<Cart />} />
        {!current ? (
            <Route to="/" />
          ) : (
            <Route path="/book/:id" element={<SingleItem />} />
            )}
        
      </Routes>
    </Suspense>
    </div>

  </Router> );
}


const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
