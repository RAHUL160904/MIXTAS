import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopImage,homeBlogData,homeData, product } from "../assets/Images/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../Components/Common Components/Footer";
import Navbar from "../Components/Common Components/Navbar";


const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [num, setNum] = useState(0);
  const [showCategory1, setShowCategory1] = useState(false);
  const [showCategory2, setShowCategory2] = useState(false);
  const [showCategory3, setShowCategory3] = useState(false);
  // Find product by id
  const found =
    ShopImage.find((value) => value.id === Number(id)) ||
    homeData.find((value) => value.id === Number(id)) ||
    homeBlogData.find((value) => value.id === Number(id)) ||
    product.find((value) => value.id === Number(id));

  if (!found) {
    return <h2 className="text-center my-5">Product not found</h2>;
  }

  return (
    <>
    <Navbar />
      {/* Product Content */}
      <div className='container mt-5 '>
         <p className='my-1' style={{ fontSize: "25px",fontFamily:'bold' }}>
            <a className='text-decoration-none text-dark' href='/'>
              Home/
            </a>
            <a href="/shop" className='text-decoration-none text-dark'>
              Shop
            </a>
          </p>
      </div>
      <div className="container mt-3">
  <div className="row">

    {/* Main Image */}
    <div className="col-12 text-center mb-3">
  <img
    src={found.img}
    alt="Product preview"
    className="img-fluid rounded shadow-sm"
    loading="lazy"
    style={{
      maxHeight: "650px",
      minHeight: "300px",
      objectFit: "cover",
      cursor: "zoom-in",
      transition: "transform 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  />
</div>


    {/* Thumbnails */}
    <div className="col-12 d-flex justify-content-center flex-wrap gap-3">
      {ShopImage.filter((value) => value.category === "new").map(
        (value, index) => (
          <div key={index} className="p-1">
            <img
              src={value.img}
              alt={value.name}
              className="img-fluid shadow-sm"
              onClick={() => navigate(`/product/${value.id}`)}
              style={{
                height: "90px",
                width: "90px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            />
          </div>
        )
      )}
    </div>
  
          
        <div className="p-4">

  {/* Product Title */}
  <h3 className="fw-bold" style={{ fontSize: "48px" }}>
    {found.desc}
  </h3>

  {/* Price */}
  <h2 className="text-secondary">{found.price}</h2>
  <hr className="text-dark" />

  {/* About Product */}
  <p className="text-secondary">{found.abt}</p>

  {/* Quantity + Buttons */}
  <div className="d-flex flex-wrap gap-4 align-items-center mt-4">

    {/* Quantity Box */}
    <div className="border rounded d-flex align-items-center justify-content-between px-3 py-2" style={{ minWidth: "140px" }}>
      <span
        className="fs-3"
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => setNum((prev) => (prev > 0 ? prev - 1 : 0))}
      >
        −
      </span>
      <span className="px-3 text-secondary fs-4">{num}</span>
      <span
        className="fs-3"
        style={{ cursor: "pointer", userSelect: "none" }}
        onClick={() => setNum((prev) => prev + 1)}
      >
        +
      </span>
    </div>

      {/* Add to Cart Button */}
      <div>
        <button
          className="btn btn-dark px-lg-4 w-100 my-3 py-2 add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <div className="d-flex my-4 wish">
      <div className="wish">
      <i className="fa-heart fa-regular"></i>
      </div>
      <div className="mx-2 ">
        <p >Add to wishlist</p>
        </div>
        </div>
        <div className="d-flex text-secondary gap-5 mx-4">
          <div>
          <p>Categories</p>
          <p>Tags</p></div>
          <div>
          <p>JACKETS</p>
          <p>clothing, etc, fashion, m12, men, products</p>
          </div>
          </div>
               
            <div className='col-md-13 mb-8'>
            <div
              className='d-flex justify-content-between pt-2 px-6 my-2'
              onClick={() => setShowCategory1(!showCategory1)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Description</h4>
              <i className={`fa-solid ${showCategory1 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-2 `}></i>
            </div>
            <hr></hr>
            {showCategory1 && (
              <div className='px-3 pb-2 mb-2  '>
               <p className='text-secondary '>In WooCommerce, a product description refers to the written content that provides information about a specific product listed on an online store. It serves to inform potential customers about the features, benefits, specifications, and other relevant details of the product. A well-crafted product description can play a crucial role in influencing a customer's purchasing decision.</p><br></br>
               <p className='text-secondary'>In WooCommerce, you can create and manage product descriptions through the WordPress dashboard. Each product has its own page where you can input and format the description, add images, set prices, and manage other product-related details. Effective product descriptions are essential for e-commerce success as they help customers make informed decisions and contribute to a positive shopping experience.</p>
              </div>
            )}
          </div>

           <div className='col-md-13 mb-8'>
            <div
              className='d-flex justify-content-between pt-2 px-6 my-2'
              onClick={() => setShowCategory2(!showCategory2)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Additional information</h4>
              <i className={`fa-solid ${showCategory2 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-2 `}></i>
            </div>
            <hr></hr>
            {showCategory2 && (
              <div className="d-flex my-4">
                <div>
                <p>Color</p>
                <p>Size</p>
                </div>
                <div className="mx-5 text-secondary">
                  <p>Blue, Gray, Green, Red, Yellow</p>
                  <p>Large, Medium, Small</p>
                  </div>
                  </div>
            )}
          </div>

          <div className='col-md-13 mb-8'>
            <div
              className='d-flex justify-content-between pt-2 px-6 my-2'
              onClick={() => setShowCategory3(!showCategory3)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Reviews (0)</h4>
              <i className={`fa-solid ${showCategory3 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-2 `}></i>
            </div>
            <hr></hr>
            {showCategory3 && (

              
                <div className="review py-4"><h4>Reviews</h4>
                <p className="text-secondary">There are no reviews yet.</p>
                <h4 className="mt-5">Be the first to review “Dime Classic Remastered Hoodie, black”</h4>
                <p className="text-secondary mt-5">Your email address will not be published. Required fields are marked *</p>
                <p className="text-secondary">Your rating *</p>
                <div className="d-flex text-secondary ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  </div>
                  <p className="mt-5">Your review*</p>
                  <textarea name="" rows="9" id="" className="w-100">
                    </textarea>
                  <div className="row my-3">
                      <div className="col-lg-6 col-md-6">
                        <p>Name*</p>
                        <input type="text" className="w-100 p-2"></input>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <p>Email*</p>
                          <input type="email" className="w-100 p-2"></input>
                          </div>
                  </div>
                          <input type="checkbox"></input>
                          <label htmlFor="" className="mx-3 text-secondary">Save my name, email, and website in this browser for the next time I comment.</label>
                          <button className="btn btn-dark px-5 py-2 my-5">Submit</button>
                          </div>
            )}
          </div>

          <div className="d-flex flex-wrap gap-3 my-3">

  <div className="d-flex align-items-center px-3 py-2 border rounded-pill shadow-sm"
       style={{ cursor: "pointer" }}>
    <i className="fa-brands fa-facebook text-primary" style={{ fontSize: "20px" }}></i>
    <span className="ms-2">Facebook</span>
  </div>

  <div className="d-flex align-items-center px-3 py-2 border rounded-pill shadow-sm"
       style={{ cursor: "pointer" }}>
    <i className="fa-brands fa-x-twitter" style={{ fontSize: "20px", color: "black" }}></i>
    <span className="ms-2">Twitter</span>
  </div>

  <div className="d-flex align-items-center px-3 py-2 border rounded-pill shadow-sm"
       style={{ cursor: "pointer" }}>
    <i className="fa-brands fa-pinterest text-danger" style={{ fontSize: "20px" }}></i>
    <span className="ms-2">Pinterest</span>
  </div>

  <div className="d-flex align-items-center px-3 py-2 border rounded-pill shadow-sm"
       style={{ cursor: "pointer" }}>
    <i className="fa-brands fa-whatsapp text-success" style={{ fontSize: "20px" }}></i>
    <span className="ms-2">WhatsApp</span>
  </div>

</div>


      </div>
      </div>
      </div>

      {/* Related Products Section */}
      <div>
        <div class="title my-4 text-center">
          <h1 class="display-5">
            <b>Related Products</b></h1>
            </div>
             
                    <div className="container position-relative my-5">

      {/* Swiper Carousel */}
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
      >
        {ShopImage.filter((value) => value.category === "Top").map(
          (value, index) => (
            <SwiperSlide key={index} className="text-center">
              <img
                src={value.img}
                alt={value.name}
                className="img-fluid mb-2"
                onClick={() => navigate(`/product/${value.id}`)}
                style={{
                  height: "270px",
                  width: "220px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
              <p className="text-secondary">{value.name}</p>
              <p>{value.desc}</p>
              <p className="text-secondary">{value.price}</p>
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* Custom Navigation Buttons */}
       {/* Custom Navigation Buttons */}
              <div
                className="custom-prev position-absolute top-50 start-0 translate-middle-y bg-dark text-light shadow p-3 rounded-circle"
                style={{ cursor: 'pointer', zIndex: 10 }}
              >
                <i className="fa fa-chevron-left"></i>
              </div>
              <div
                className="custom-next position-absolute top-50 end-0 translate-middle-y bg-dark text-light shadow p-3 rounded-circle"
                style={{ cursor: 'pointer', zIndex: 10 }}
              >
                <i className="fa fa-chevron-right"></i>
              </div>
      </div>
      </div>
      <Footer/>
         
    </>
  );
};

export default Product;
