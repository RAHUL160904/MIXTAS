import React from 'react';
import Homeswiper from '../Components/Homepage Components/Homeswiper';
import NewArrivals from '../Components/Homepage Components/NewArrivals';
import Blogswiper from '../Components/Homepage Components/Blogswiper';
import Footer from '../Components/Common Components/Footer';
import { useNavigate } from 'react-router-dom';
import Bimage2 from '../assets/Images/blog0.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
 <div className="container my-5">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">

          {/* Left spacer for desktop */}
          <div className="d-none d-lg-block" style={{ width: '160px' }}></div>


          {/* Center Logo */}
          <div className="text-center flex-grow-1">
            <img
              src={Bimage2}
              alt="Brand Logo"
              className="img-fluid"
              style={{ maxHeight: '90px' }}
            />
          </div>

          {/* Icons on right */}
          <div
  className="d-flex flex-nowrap justify-content-center justify-content-lg-end align-items-center mt-3"
  style={{ minWidth: '150px' }}
>
  <i
    className="fa-regular fa-user mx-2"
    style={{ fontSize: '20px', cursor: 'pointer' }}
    data-bs-toggle="offcanvas"
    data-bs-target="#loginOffcanvas"
    aria-controls="loginOffcanvas"
    title="Login"
  ></i>

  <i
    className="fa-solid fa-search mx-2"
    style={{ fontSize: '20px', cursor: 'pointer' }}
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasTop"
    aria-controls="offcanvasTop"
    title="Search"
  ></i>

  <i
    className="fa-regular fa-heart mx-2"
    style={{ fontSize: '20px', cursor: 'pointer' }}
    onClick={() => navigate('/wishlist')}
    title="Wishlist"
  ></i>

  <div className="position-relative">
    <i
      className="fa-solid fa-cart-flatbed-suitcase mx-2"
      style={{ fontSize: '20px', cursor: 'pointer' }}
      data-bs-toggle="offcanvas"
      data-bs-target="#wishlistOffcanvas"
      aria-controls="wishlistOffcanvas"
      title="Shopping Cart"
    ></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">0</span>
  </div>
</div>



          {/* Mobile hamburger */}
          <div className="d-flex d-lg-none w-20 justify-content-start my-2">
            <button
              className="btn btn-outline-secondary text-dark"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navOffcanvas"
              aria-controls="navOffcanvas"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop navbar */}
      <div className="bar d-none d-lg-flex justify-content-center align-items-center gap-3 text-center border-top pt-3">
        <h5 className="mx-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
           HOME
        </h5>
        <h5 className="mx-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>
           ABOUT
        </h5>
        <h5 className="mx-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/shop')}>
           SHOP
        </h5>
        <h5 className="mx-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/faq')}>
          FAQ
        </h5>
        <h5 className="mx-2" style={{ cursor: 'pointer' }} onClick={() => navigate('/contact')}>
           CONTACT
        </h5>
      </div>

      {/* Offcanvas navigation (mobile) */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="navOffcanvas"
        aria-labelledby="navOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="navOffcanvasLabel">
            Navigation
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {[
            { label: 'HOME', icon: 'fa-house', path: '/' },
            { label: 'ABOUT', icon: 'fa-circle-info', path: '/about' },
            { label: 'SHOP', icon: 'fa-store', path: '/shop' },
            { label: 'FAQ', icon: 'fa-circle-question', path: '/faq', style: 'regular' },
            { label: 'CONTACT', icon: 'fa-phone', path: '/contact' },
          ].map(({ label, icon, path, style }, idx) => (
            <h5
              key={idx}
              className="my-3"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate(path);
                // Close offcanvas after navigating
                const offcanvasEl = document.getElementById('navOffcanvas');
                const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasEl);
                bsOffcanvas?.hide();
              }}
            >
              <i className={`fa-${style === 'regular' ? 'regular' : 'solid'} fa-${icon} me-2`}></i>
              {label}
            </h5>
          ))}
        </div>
      </div>

      {/* Offcanvas login */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="loginOffcanvas"
        aria-labelledby="loginOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h4 id="loginOffcanvasLabel">Login</h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* Your login form here */}
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit" className="btn btn-dark w-100">Login</button>
            <a href="#" className="text-dark mt-3 d-block">Lost Your Password?</a>
            <h6 className="text-center text-secondary mt-3">
              Not a Member? <a href="#" className="text-dark">Register</a>
            </h6>
          </form>
        </div>
      </div>

      {/* Offcanvas search */}
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ height: '100vh' }}
      >
        <div className="offcanvas-header border-0 justify-content-start px-4 pt-4">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex justify-content-center align-items-center mt-5">
          <div className="input-group w-75 w-md-50">
            <input
              type="search"
              className="form-control form-control-lg"
              placeholder="Search for products..."
              autoFocus
            />
            <button className="btn btn-dark" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas shopping cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="wishlistOffcanvas"
        aria-labelledby="wishlistOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h4 id="wishlistOffcanvasLabel">SHOPPING CART</h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
       
      <div class="container text-center text-secondary my-auto">
        <i class="fa-solid fa-bag-shopping fa-10x bg-light p-4 rounded-circle"></i>
        <p class="my-3">No products in the cart.</p>
        </div>
      
        </div>
      




      <Homeswiper />
      <NewArrivals />
      <Blogswiper />
      <Footer/>
   
    </>
  );
};

export default Home;
