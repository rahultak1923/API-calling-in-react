import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Item from './components/Item';
import Cart from './components/Cart';
import Header from './components/Header';
import Cartheader from './components/Cartheader';
import Cartnew from './components/Cartnew';

function App() {
  const [cart, setCart] = useState([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add or remove an item from the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.name === item.name);
      if (itemExists) {
        // If the item is already in the cart, remove it
        return prevCart.filter((cartItem) => cartItem.name !== item.name);
      } else {
        // If the item is not in the cart, add it
        return [...prevCart, item];
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container my-3">
                  <Header />
                </div>
                <div className="container item-container">
                  <Item name="MacBook Pro" price={100000} addToCart={handleAddToCart} />
                  <Item name="Pendrive" price={4000} addToCart={handleAddToCart} />
                  <Item name="Mobile" price={35000} addToCart={handleAddToCart} />
                  <Item name="Tablet" price={20000} addToCart={handleAddToCart} />
                  <Item name="Headphones" price={5000} addToCart={handleAddToCart} />
                </div>
                <div className="container my-3">
                  <Cartheader />
                </div>
                <Cart cartItems={cart} />
              </>
            }
          />
          <Route path="/cartnew" element={<Cartnew cartItems={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
