// import React from 'react';
// import { product } from '../../assets/Images/assets';

// const NewArrivals = () => {
//   return (
//     <>
//       <h1 className='head text-center my-4'>New Arrivals</h1>
//       <div className='container'>
//         <div className="row g-3 justify-content-center">
//           {product
//             // .filter((value) => value.category === 'New Arrivals')
//             .map((value, index) => (
//               <div className='col-lg-3 col-md-6' key={index}>
//                 <div className='card-border text-center p-3'>
//                   <img
//                     src={value.img}
//                     alt={value.name}
//                     className="img-fluid mb-2"
//                     onClick={()=>navigate(`/product/${value.id}`)}
//                     style={{ height: '250px', objectFit: 'cover',cursor:'pointer' }}
                    
//                   />
//                   <p className='text-secondary'>{value.name}</p>
//                   <p className='text-dark'>{value.desc}</p>
//                   <p className='text-secondary'>{value.price}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewArrivals;

import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { product } from '../../assets/Images/assets';

const NewArrivals = () => {
  const navigate = useNavigate();  

  return (
    <>
      <h1 className='head text-center my-4'>New Arrivals</h1>
      <div className='container'>
        <div className="row g-3 justify-content-center">
          {product.map((value, index) => (
                   <div className="col-lg-3 col-md-6 my-3" key={index}>
                     <div className="card-border text-center p-3 position-relative product-card">
                       <div className="image-wrapper position-relative">
                         <img
                           src={value.img}
                           alt={value.name}
                           className="img-fluid mb-2"
                           style={{ height: '250px', width:'250px', cursor: 'pointer' }}
                           onClick={() => navigate(`/product/${value.id}`)}
                         />
     
                         {/* hover icons over image in column */}
                         <div className="icon-overlay">
                           <i className="fa-regular fa-heart"></i>
                           <i className="fa-solid fa-search"></i>
                           <i className="fa-solid fa-cart-flatbed-suitcase"></i>
                         </div>
                       </div>
     
                       <p className="text-secondary">{value.name}</p>
                       <p className="text-dark">{value.desc}</p>
                       <p className="text-secondary">{value.price}</p>
                     </div>
                   </div>
                 ))}
            
        </div>
      </div>
      
    </>
  );
};

export default NewArrivals;
