import React from 'react';
import { useNavigate } from 'react-router-dom';
import { homeBlogData } from '../../assets/Images/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Blogswiper = () => {
  const navigate = useNavigate();

  const handleBlogClick = (id) => {
    navigate(`/blog`, { state: { blog: id } });
  };

  return (
    <>
      <h1 className="head text-center my-4">Blog & Insights</h1>
      <div className="container position-relative">
        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {homeBlogData.map((value, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleBlogClick(value.id)}
              style={{ cursor: 'pointer' }}
            >
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <img
                  src={value.img}
                  alt="blog"
                  className="w-100"
                  style={{
                    height: '300px',
                    objectFit: 'cover',
                  }}
                />
                  <p className="mb-5">{value.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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
    </>
  );
};

export default Blogswiper;
