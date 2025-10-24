// import React, { useState } from 'react'
// import { ShopImage } from '../../assets/Images/assets'
// import { useNavigate } from 'react-router-dom';

// const Shoppage = () => {
//   const navigate = useNavigate()
//   const[activetab,setactivetab]=useState(false);
//   const[activetab1,setactivetab1]=useState(false);
//   const[activetab2,setactivetab2]=useState(false);
//   const[activetab3,setactivetab3]=useState(false);
//   const[activetab4,setactivetab4]=useState(false);
  
//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleDropdown = () =>{ 
//     setIsOpen(!isOpen);
//   }
  
//   return (
//     <>
//       <div className="container">
//   <div className="text-center my-4">
//     {/* Page Title */}
//     <h1 className="display-5 fw-bold">Shop</h1>

//     {/* Breadcrumb */}
//     <p className="my-1 fs-5">
//       <a
//         href="/"
//         className="text-decoration-none text-dark"
//         data-discover="true"
//       >
//         Home /
//       </a>
//       <a
//         href="#"
//         className="text-decoration-none text-secondary ms-1"
//       >
//         Shop
//       </a>
//     </p>
//   </div>
// </div>

          
//           <div className='container'>
//           <div className='d-flex'>
//            <div className='row'>
//             <div className='col-lg-15 col-md-none'>
//               <div className='col-12'>
//                 <div className='d-flex justify-content-between pt-3 px-3 border'>
//                    <h6
//                     onClick={() =>setactivetab(!activetab)}
//                     style={{ cursor: 'pointer' }}
//                     >Product Categories</h6>
//                    <p>
//                     <i className="fa-solid fa-angle-down my-1">
//                     </i>
//                    </p>
//                 </div>
//                 <div className={`${activetab ? 'hide' : 'show'}`}>
//                   <div className='text-secondary border py-3'>
//                     <div className='d-flex justify-content-between px-3'>
//                       <p className='shop_filter'>
//                         <i className="fa-solid fa-chevron-right mx-2">
//                         </i>
//                         "HOODIES"
//                       </p>
//                       <p>5</p>
//                     </div>

//                     <div className='d-flex justify-content-between px-3'>
//                       <p className='shop_filter'>
//                         <i className="fa-solid fa-chevron-right mx-2">
//                         </i>
//                         "MEN"
//                       </p>
//                       <p>10</p>
//                     </div>

//                     <div className='d-flex justify-content-between px-3'>
//                       <p className='shop_filter'>
//                         <i className="fa-solid fa-chevron-right mx-2">
//                         </i>
//                         "BAGS"
//                       </p>
//                       <p>5</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                       <p className='shop_filter'>
//                         <i className="fa-solid fa-chevron-right mx-2">
//                         </i>
//                         "JACKETS"
//                       </p>
//                       <p>20</p>
//                     </div>

//                     <div className='d-flex justify-content-between px-3'>
//                       <p className='shop_filter'>
//                         <i className="fa-solid fa-chevron-right mx-2">
//                         </i>
//                         "SWEATSHIRTS"
//                       </p>
//                       <p>2</p>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               <div className='col-12 my-4'>
//                 <div className='d-flex justify-content-between pt-3 px-3 border'>
//                    <h6
//                     onClick={() =>setactivetab1(!activetab1)}
//                     style={{ cursor: 'pointer' }}>Price</h6>
//                    <p>
//                     <i className="fa-solid fa-angle-down my-1">
                      
//                     </i>
//                    </p>
//                     </div>
                   
//                     <div className={`${activetab1 ? 'hide' : 'show'}`}>
//                     <div className='text-secondary border py-3'>
//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>$50-$100</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>$100-$150</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>$150-$200</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>$200-$250</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>$250-$300</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>$1-$50</p>
//                     </div>
                    
//                     </div>
//                     </div>
//                     </div>
                
//                <div className='col-12 my-4'>
//                 <div className='d-flex justify-content-between pt-3 px-3 border'>
//                    <h6
//                       onClick={() =>setactivetab2(!activetab2)}
//                     style={{ cursor: 'pointer' }}>Color</h6>
//                    <p>
//                     <i className="fa-solid fa-angle-down my-1">  
//                     </i>
//                    </p>
//                     </div>

//                     <div className={activetab2 ? 'hide' : 'show'}>
//                     <div className='text-secondary border py-3 '>
//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>
//                       <i className="fa-solid fa-circle mx-2 text-primary"></i>
//                       Blue
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>
//                       <i className="fa-solid fa-circle mx-2 text-secondary"></i>
//                       Gray
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>
//                       <i className="fa-solid fa-circle mx-2 text-success"></i>
//                       Green
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>
//                       <i className="fa-solid fa-circle mx-2 text-danger"></i>
//                       Red
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>
//                       <i className="fa-solid fa-circle mx-2 text-warning"></i>
//                       Blue
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                     </div>
//                     </div>
//                     </div>

//                     <div className='col-12 my-4'>
//                    <div className='d-flex justify-content-between pt-3 px-3 border'>
//                    <h6
//                    onClick={() =>setactivetab3(!activetab3)}
//                     style={{ cursor: 'pointer' }}>Size</h6>
//                    <p>
//                     <i className="fa-solid fa-angle-down my-1">  
//                     </i>
//                     </p>
//                     </div>

//                    <div className={`${activetab3  ? 'hide' : 'show'}`}>
//                     <div className='text-secondary border py-3'>
//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>Large
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>Medium
//                      </p>
//                      <p>(46)</p>
//                     </div>

//                      <div className='d-flex justify-content-between px-3'>
//                      <p className='shop_filter'>Small
//                      </p>
//                      <p>(46)</p>
//                     </div>
                    
//                     </div>
//                     </div>
//                     </div>
                   
//                    <div className='col-12 my-4'>
//                    <div className='d-flex justify-content-between pt-3 px-3 border'>
//                    <h6
//                     onClick={() =>setactivetab4(!activetab4)}
//                     style={{ cursor: 'pointer' }}>Tags</h6>
//                    <p>
//                     <i className="fa-solid fa-angle-down my-1">  
//                     </i>
//                     </p>
//                     </div>
                    
//                      <div className={activetab4 ? 'hide' : 'show'}>
//                      <div className=' border '>
//                      <div className='d-flex '>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">Clothing</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">Etc</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">Fashion</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M11</button>
//                     </div>

//                     <div className='d-flex '>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M12</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M31</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M32</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M41</button>
//                     </div>

//                      <div className='d-flex '>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M71</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M72</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">M81</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">Men</button>
//                     </div>

//                      <div className='d-flex '>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">Product</button>
//                      <button className="btn m-1 tagbtn bg-secondary text-light">Women</button>
//                     </div>

//                     </div>
//                     </div>
//                     </div>
//            </div>
//            </div>

//           <div className="container">
//   <div className="row g-3 justify-content-center">

//     {/* ✅ Entire top bar hidden on mobile */}
//     <div className="d-none d-md-flex justify-content-between mb-3">
//       {/* Left: results count */}
//       <div>
//         <p className="text-secondary mb-0">Showing 1–12 of 47 results</p>
//       </div>

//       {/* Right: sorting & icons */}
//       <div className="d-flex">
//         <div className="d-flex mt-2 mx-2">
//           <p className="mx-1 mb-0">show 12 15 30</p>
//         </div>
//         <div>
//           <div className="d-flex gap-2 align-items-start">
//             {/* Dropdown Button */}
//             <button
//               type="button"
//               onClick={toggleDropdown}
//               aria-expanded={isOpen}
//               className="border dropdown-toggle btn btn-none"
//             >
//               Default sorting
//               <i className={`fa-solid fa-down ml-2 ${isOpen ? '' : ''}`}></i>
//             </button>

//             {/* Optional Icons */}
//             <i
//               className="fa-solid fa-table-cells-large text-light bg-dark"
//               style={{ fontSize: "21px", marginTop: "8px", cursor: "pointer", padding: "2px" }}
//             ></i>
//             <i
//               className="fa-solid fa-list text-light bg-dark"
//               style={{ fontSize: "21px", marginTop: "8px", cursor: "pointer", padding: "2px" }}
//             ></i>

//             {/* Dropdown Menu */}
//             {isOpen && (
//               <div
//                 className="border mt-5 p-2 bg-white text-dark position-absolute"
//                 style={{ zIndex: "1" }}
//               >
//                 <ul className="list-unstyled mb-0">
//                   <li className="dropdown" style={{ padding: "4px 8px", cursor: "pointer" }}>
//                     Default sorting
//                   </li>
//                   <li className="dropdown" style={{ padding: "4px 8px", cursor: "pointer" }}>
//                     Sort by popularity
//                   </li>
//                   <li className="dropdown" style={{ padding: "4px 8px", cursor: "pointer" }}>
//                     Sort by average rating
//                   </li>
//                   <li className="dropdown" style={{ padding: "4px 8px", cursor: "pointer" }}>
//                     Sort by latest
//                   </li>
//                   <li className="dropdown" style={{ padding: "4px 8px", cursor: "pointer" }}>
//                     Sort by price: low to high
//                   </li>
//                   <li className="dropdown" style={{ padding: "4px 8px", cursor: "pointer" }}>
//                     Sort by price: high to low
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Products Grid */}
//     <div className="container">
//   <div className="row g-3 justify-content-center">
//     {ShopImage.map((value, index) => (
//       <div className="col-lg-4 col-md-6 col-12 my-3" key={index}>
//         <div className="card-border text-center p-3 position-relative product-card">
//           <div className="image-wrapper position-relative">
//             <img
//               src={value.img}
//               alt={value.name}
//               className="img-fluid mb-2 w-100"
//               style={{ height: "250px", objectFit: "cover" }}
//               onClick={() => navigate(`/product/${value.id}`)}
//             />

//             {/* hover icons */}
//             <div className="icon-overlay d-flex justify-content-center gap-3">
//               <i className="fa-regular fa-heart"></i>
//               <i className="fa-solid fa-search"></i>
//               <i className="fa-solid fa-cart-flatbed-suitcase"></i>
//             </div>
//           </div>

//           <p className="text-secondary mb-1">{value.name}</p>
//           <p className="text-dark mb-1">{value.desc}</p>
//           <p className="text-secondary">{value.price}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
// </div>
// </div>
// </div>

             
//            </>
  
//          );
        
//        };
       
                  


// export default Shoppage

import React, { useState } from 'react';
import { ShopImage } from '../../assets/Images/assets';
import { useNavigate } from 'react-router-dom';

const Shoppage = () => {
  const navigate = useNavigate();
  const [activetab, setactivetab] = useState(false);
  const [activetab1, setactivetab1] = useState(false);
  const [activetab2, setactivetab2] = useState(false);
  const [activetab3, setactivetab3] = useState(false);
  const [activetab4, setactivetab4] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Page Header */}
      <div className="container">
        <div className="text-center my-4">
          <h1 className="display-5 fw-bold">Shop</h1>
          <p className="my-1 fs-5">
            <a href="/" className="text-decoration-none text-dark">Home /</a>
            <a href="#" className="text-decoration-none text-secondary ms-1">Shop</a>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Sidebar (filters) */}
          <div className="col-lg-3 col-12 mb-4">
            {/* Product Categories */}
            <div className="col-12">
              <div className="d-flex justify-content-between pt-3 px-3 border">
                <h6 onClick={() => setactivetab(!activetab)} style={{ cursor: 'pointer' }}>
                  Product Categories
                </h6>
                <i className="fa-solid fa-angle-down my-1"></i>
              </div>
              <div className={`${activetab ? 'hide' : 'show'}`}>
                <div className="text-secondary border py-3">
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-chevron-right mx-2"></i>HOODIES</p>
                    <p>5</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-chevron-right mx-2"></i>MEN</p>
                    <p>10</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-chevron-right mx-2"></i>BAGS</p>
                    <p>5</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-chevron-right mx-2"></i>JACKETS</p>
                    <p>20</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-chevron-right mx-2"></i>SWEATSHIRTS</p>
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="col-12 my-4">
              <div className="d-flex justify-content-between pt-3 px-3 border">
                <h6 onClick={() => setactivetab1(!activetab1)} style={{ cursor: 'pointer' }}>Price</h6>
                <i className="fa-solid fa-angle-down my-1"></i>
              </div>
              <div className={`${activetab1 ? 'hide' : 'show'}`}>
                <div className="text-secondary border py-3">
                  <p className="shop_filter px-3">$50-$100</p>
                  <p className="shop_filter px-3">$100-$150</p>
                  <p className="shop_filter px-3">$150-$200</p>
                  <p className="shop_filter px-3">$200-$250</p>
                  <p className="shop_filter px-3">$250-$300</p>
                  <p className="shop_filter px-3">$1-$50</p>
                </div>
              </div>
            </div>

            {/* Color */}
            <div className="col-12 my-4">
              <div className="d-flex justify-content-between pt-3 px-3 border">
                <h6 onClick={() => setactivetab2(!activetab2)} style={{ cursor: 'pointer' }}>Color</h6>
                <i className="fa-solid fa-angle-down my-1"></i>
              </div>
              <div className={`${activetab2 ? 'hide' : 'show'}`}>
                <div className="text-secondary border py-3">
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-circle mx-2 text-primary"></i>Blue</p>
                    <p>(46)</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-circle mx-2 text-secondary"></i>Gray</p>
                    <p>(46)</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-circle mx-2 text-success"></i>Green</p>
                    <p>(46)</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-circle mx-2 text-danger"></i>Red</p>
                    <p>(46)</p>
                  </div>
                  <div className="d-flex justify-content-between px-3">
                    <p className="shop_filter"><i className="fa-solid fa-circle mx-2 text-warning"></i>Yellow</p>
                    <p>(46)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Size */}
            <div className="col-12 my-4">
              <div className="d-flex justify-content-between pt-3 px-3 border">
                <h6 onClick={() => setactivetab3(!activetab3)} style={{ cursor: 'pointer' }}>Size</h6>
                <i className="fa-solid fa-angle-down my-1"></i>
              </div>
              <div className={`${activetab3 ? 'hide' : 'show'}`}>
                <div className="text-secondary border py-3">
                  <div className="d-flex justify-content-between px-3"><p className="shop_filter">Large</p><p>(46)</p></div>
                  <div className="d-flex justify-content-between px-3"><p className="shop_filter">Medium</p><p>(46)</p></div>
                  <div className="d-flex justify-content-between px-3"><p className="shop_filter">Small</p><p>(46)</p></div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="col-12 my-4">
              <div className="d-flex justify-content-between pt-3 px-3 border">
                <h6 onClick={() => setactivetab4(!activetab4)} style={{ cursor: 'pointer' }}>Tags</h6>
                <i className="fa-solid fa-angle-down my-1"></i>
              </div>
              <div className={`${activetab4 ? 'hide' : 'show'}`}>
                <div className="border p-2">
                  <div className="d-flex flex-wrap">
                    <button className="btn m-1 tagbtn bg-secondary text-light">Clothing</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">Etc</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">Fashion</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M11</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M12</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M31</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M32</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M41</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M71</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M72</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">M81</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">Men</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">Product</button>
                    <button className="btn m-1 tagbtn bg-secondary text-light">Women</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="col-lg-9 col-12">
            {/* Top Bar (hidden on mobile) */}
            <div className="d-none d-md-flex justify-content-between mb-3">
              <p className="text-secondary mb-0">Showing 1–12 of 47 results</p>
              <div className="d-flex">
                <p className="mx-2 mt-2">show 12 15 30</p>
                <button type="button" onClick={toggleDropdown} aria-expanded={isOpen}
                        className="border dropdown-toggle btn btn-none">
                  Default sorting
                </button>
                <i className="fa-solid fa-table-cells-large text-light bg-dark mx-2"
                   style={{ fontSize: "21px", marginTop: "17px", cursor: "pointer", padding: "2px" }}></i>
                <i className="fa-solid fa-list text-light bg-dark mx-1"
                   style={{ fontSize: "21px", marginTop: "17px", cursor: "pointer", padding: "2px" }}></i>

                {isOpen && (
                  <div className="border mt-5 p-2 bg-white text-dark position-absolute" style={{ zIndex: "1" }}>
                    <ul className="list-unstyled mb-0">
                      <li className="dropdown p-2">Default sorting</li>
                      <li className="dropdown p-2">Sort by popularity</li>
                      <li className="dropdown p-2">Sort by average rating</li>
                      <li className="dropdown p-2">Sort by latest</li>
                      <li className="dropdown p-2">Sort by price: low to high</li>
                      <li className="dropdown p-2">Sort by price: high to low</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Product Grid */}
            <div className="row g-3 justify-content-center">
              {ShopImage.map((value, index) => (
                <div className="col-lg-4 col-md-6 col-12 my-3" key={index}>
                  <div className="card-border text-center p-3 position-relative product-card">
                    <div className="image-wrapper position-relative">
                      <img
                        src={value.img}
                        alt={value.name}
                        className="img-fluid mb-2 w-100"
                        style={{ height: "250px", objectFit: "cover" }}
                        onClick={() => navigate(`/product/${value.id}`)}
                      />
                      <div className="icon-overlay d-flex justify-content-center gap-3">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-solid fa-search"></i>
                        <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                      </div>
                    </div>
                    <p className="text-secondary mb-1">{value.name}</p>
                    <p className="text-dark mb-1">{value.desc}</p>
                    <p className="text-secondary">{value.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoppage;
