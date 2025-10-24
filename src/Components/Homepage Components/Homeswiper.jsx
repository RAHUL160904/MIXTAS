import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { homeData } from '../../assets/Images/assets';
import { homeswip } from '../../assets/Images/assets';
import { useNavigate } from 'react-router-dom';

const Homeswiper = () => {
  const navigate=useNavigate();
  return (
    <>
   <div className="w-100" style={{ minHeight: "100vh" }}>
  <Swiper
    modules={[Navigation, Autoplay]}
    slidesPerView={1}
    loop
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    className="w-100 h-100"
  >
    {homeswip.map((value, index) => (
      <SwiperSlide key={index} className="w-100 h-100">
        <div className="position-relative w-100 h-100" style={{ minHeight: "100vh" }}>
          {/* Fullscreen Image */}
          <img
            src={value.img}
            alt="Slide"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              display: "block",
              minHeight: "100vh", // force visible height
            }}
          />

          {/* Overlay text */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start px-3 px-md-5 text-light">
            <h4 className="mb-2 fs-6 fs-md-5 fs-lg-4 text-dark">NEW ARRIVALS</h4>
            <p
              className="fw-bold text-dark"
              style={{
                fontSize: "clamp(22px, 6vw, 50px)",
                lineHeight: "1.2",
              }}
            >
              STYLISH <br /> COMFORT FOR <br /> FALL NIGHTS
            </p>
            <button
              className="shop bg-dark text-light border-0 mt-3"
              style={{
                fontSize: "clamp(14px, 2vw, 20px)",
                padding: "10px 20px",
                borderRadius: "20px",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    ))}

    {/* Navigation Buttons */}
    <div
      className="custom-prev position-absolute top-50 start-0 translate-middle-y bg-dark text-light p-3 rounded-circle"
      style={{ cursor: "pointer", zIndex: 20 }}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
    <div
      className="custom-next position-absolute top-50 end-0 translate-middle-y bg-dark text-light p-3 rounded-circle"
      style={{ cursor: "pointer", zIndex: 20 }}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  </Swiper>
</div>


    
    
<div className="position-relative container py-5">
  <Swiper
    loop={true}
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
      
    }}
    slidesPerView={1} 
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    spaceBetween={30}
    breakpoints={{
      0: { slidesPerView: 1 },     // Mobile
      768: { slidesPerView: 2 },   // Tablet
      1024: { slidesPerView: 5 },  // Desktop
    }}
    modules={[Navigation, Autoplay]}
  >
    {homeData.map((value, index) => (
      <SwiperSlide key={index} className="text-center">
        <img
          src={value.img}
          alt="Slide"
          onClick={()=>navigate("/shop")}
          style={{
            width: "250px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <p className="mt-2">{value.desc}</p>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom Navigation Buttons */}
  <div
    className="custom-prev position-absolute top-50 start-0 translate-middle-y bg-dark text-light shadow p-3 rounded-circle"
    style={{ cursor: "pointer", zIndex: 10 }}
  >
    <i className="fa fa-chevron-left"></i>
  </div>
  <div
    className="custom-next position-absolute top-50 end-0 translate-middle-y bg-dark text-light shadow p-3 rounded-circle"
    style={{ cursor: "pointer", zIndex: 10 }}
  >
    <i className="fa fa-chevron-right"></i>
  </div>
</div>
    </>
  );
}
export default Homeswiper;
