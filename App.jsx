import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function LandingPage({ onGetStarted }) {
  return (
    <div className="background-image">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Discover plants that breathe life into every corner of your home.
          Hand-picked, sustainably grown, and ready to thrive.
        </p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  // Simple in-app routing: 'landing' | 'products' | 'cart' | 'about'
  const [page, setPage] = useState('landing');

  if (page === 'landing') {
    return (
      <Provider store={store}>
        <LandingPage onGetStarted={() => setPage('products')} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <AppShell page={page} setPage={setPage} />
    </Provider>
  );
}

function AppShell({ page, setPage }) {
  return (
    <>
      {page === 'products' && <ProductList setPage={setPage} />}
      {page === 'cart' && <CartItem setPage={setPage} />}
      {page === 'about' && (
        <>
          <Navbar setPage={setPage} />
          <AboutUs />
        </>
      )}
    </>
  );
}

// Navbar is exported so ProductList and CartItem can also import it
import { useSelector } from 'react-redux';
import { selectCartCount } from './store/CartSlice';

export function Navbar({ setPage }) {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <a
        className="navbar-brand"
        href="#"
        onClick={(e) => { e.preventDefault(); setPage('products'); }}
      >
        🌿 Paradise Nursery
      </a>
      <ul className="navbar-links">
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('products'); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('products'); }}>
            Plants
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}>
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="cart-icon-wrapper"
            onClick={(e) => { e.preventDefault(); setPage('cart'); }}
            aria-label={`Cart, ${cartCount} items`}
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;
