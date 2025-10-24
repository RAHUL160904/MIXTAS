import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Bimage2 from '../../assets/Images/blog0.png';

const Navbar = () => {
  const navigate=useNavigate();
   const [open,setopen]=useState(false);
    const [money,setmoney]=useState(false);
    const toggleDropdown = () =>{ 
      setopen(!open);
    }
    const toggleDropdown1 = () =>{ 
      setmoney(!money);
    }
  return (
    <>
       <div className="d-none d-sm-block">   {/* Hide on xs (<576px), show on sm+ */}
  <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center my-1">
    
    {/* Left: Free Shipping */}
    <div className="my-2 text-center text-md-start">
      <p className="mb-0">
        Free shipping on US orders $100+ & Free exchanges
      </p>
    </div>

    {/* Right: Dropdowns */}
    <div className="d-flex flex-column flex-md-row gap-2 align-items-center">
      
      {/* Language Dropdown */}
      <div className="position-relative">
        <h6
          onClick={() => {
            toggleDropdown();
            if (money) toggleDropdown1();
          }}
          aria-expanded={open}
          className="dropdown-toggle btn mb-0 d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          English
        </h6>

        {open && (
          <div className="mt-1 bg-white shadow-sm border rounded position-absolute end-0">
            <ul className="list-unstyled mb-0">
              <li className="dropdown-item" style={{ cursor: "pointer" }}>French</li>
              <li className="dropdown-item" style={{ cursor: "pointer" }}>German</li>
              <li className="dropdown-item" style={{ cursor: "pointer" }}>Spanish</li>
            </ul>
          </div>
        )}
      </div>

      {/* Currency Dropdown */}
      <div className="position-relative">
        <h6
          onClick={() => {
            toggleDropdown1();
            if (open) toggleDropdown();
          }}
          aria-expanded={money}
          className="dropdown-toggle btn mb-0 d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          USD
        </h6>

        {money && (
          <div className="mt-1 bg-white shadow-sm border rounded position-absolute end-0">
            <ul className="list-unstyled mb-0">
              <li className="dropdown-item" style={{ cursor: "pointer" }}>EURO</li>
              <li className="dropdown-item" style={{ cursor: "pointer" }}>AUD</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>

  <hr className="text-dark my-2" />
</div>

      
      
      
            {/* Navbar */}
            <div className="container my-3">
  <div className="d-flex justify-content-between align-items-center">

    <div className="d-lg-none">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu"
        aria-controls="mobileMenu"
      >
        <i className="fa-solid fa-bars fs-4"></i>
      </button>
    </div>

    {/* Left: Logo */}
    <img
      src={Bimage2}
      style={{ height: "35px", width: "130px", cursor: "pointer" }}
      onClick={() => navigate("/")}
      alt="logo"
    />

    {/* Center: Navbar links (desktop & tablet only) */}
    <div className="d-none d-lg-flex gap-4 m-2 mb-1 fs-6" style={{ cursor: "pointer", fontFamily: "-moz-initial" }}>
      <h5 onClick={() => navigate("/")}>HOME</h5>
      <h5 onClick={() => navigate("/about")}>ABOUT</h5>
      <h5 onClick={() => navigate("/shop")}>SHOP</h5>
      <h5 onClick={() => navigate("/faq")}>FAQ</h5>
      <h5 onClick={() => navigate("/contact")}>CONTACT</h5>
    </div>

    {/* Right: Icons */}
    <div className="d-flex align-items-center position-relative">
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
        style={{ fontSize: "20px", cursor: "pointer" }}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
      ></i>
      <i
        className="fa-regular fa-heart mx-2"
        style={{ fontSize: "20px", cursor: "pointer" }}
        onClick={() => navigate("/wishlist")}
      ></i>
      <i
        className="fa-solid fa-cart-flatbed-suitcase mx-2"
        style={{ fontSize: "20px", cursor: "pointer" }}
        data-bs-toggle="offcanvas"
        data-bs-target="#wishlistOffcanvas"
      ></i>

      <span
        id="cart-count"
        className="bg-dark position-absolute top-0 start-100 translate-middle rounded-circle p-1 badge bg-primary"
      >
        0
      </span>
    </div>
  </div>
</div>

{/* Offcanvas Menu for Mobile */}
<div
  className="offcanvas offcanvas-start"
  tabIndex="-1"
  id="mobileMenu"
  aria-labelledby="mobileMenuLabel"
>
  <div className="offcanvas-header">
    <h5 id="mobileMenuLabel">Menu</h5>
   <button
  type="button"
  className="btn-close btn-close-dark fs-6"
  data-bs-dismiss="offcanvas"
  aria-label="Close"
  style={{ position: "absolute", top: "15px", left: "270px" }}
></button>

  </div>
  <div className="offcanvas-body d-flex flex-column gap-3">
    <h5 onClick={() => navigate("/")}>HOME</h5>
    <h5 onClick={() => navigate("/about")}>ABOUT</h5>
    <h5 onClick={() => navigate("/shop")}>SHOP</h5>
    <h5 onClick={() => navigate("/faq")}>FAQ</h5>
    <h5 onClick={() => navigate("/contact")}>CONTACT</h5>
  </div>
</div>

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

           <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="wishlistOffcanvas"
              aria-labelledby="wishlistOffcanvasLabel"
            >
      <div className="offcanvas-header">
        <h4 id="wishlistOffcanvasLable">SHOPPING CART</h4>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="container text-center text-secondary my-auto"><i class="fa-solid fa-bag-shopping fa-10x bg-light p-4 rounded-circle"></i><p class="my-3">No products in the cart.</p></div>
      </div>



</>
  );
};

export default Navbar;

