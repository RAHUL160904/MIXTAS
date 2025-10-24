import React, { useState } from 'react';

const Faqpage = () => {
  const [showCategory1, setShowCategory1] = useState(false);
  const [showCategory2, setShowCategory2] = useState(false);
  const [showCategory3, setShowCategory3] = useState(false);
  const [showCategory4, setShowCategory4] = useState(false);
  const [showCategory5, setShowCategory5] = useState(false);
  const [showCategory6, setShowCategory6] = useState(false);
  const [showCategory7, setShowCategory7] = useState(false);
  const [showCategory8, setShowCategory8] = useState(false);
  const [showCategory9, setShowCategory9] = useState(false);
  const [showCategory10, setShowCategory10] = useState(false);


  return (
    <>
      <div className='container'>
        <div className='head text-center my-5'>
          <h1 className='display-1'><b>FAQs</b></h1>
          <p className='my-1' style={{ fontSize: "20px" }}>
            <a className='text-decoration-none text-dark' href='/'>
              Home/
            </a>
            <a href="#" className='text-decoration-none text-secondary'>
              FAQs
            </a>
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='row'>

          {/* Column 1 */}
          <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory1(!showCategory1)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>What is your return policy ?</h4>
              <i className={`fa-solid ${showCategory1 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory1 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>We offer a hassle-free return policy. If you’re not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for detailed instructions</p>
              </div>
            )}
          </div>

          {/* Column 2 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory2(!showCategory2)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>How do I care for my garments ?</h4>
              <i className={`fa-solid ${showCategory2 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory2 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>Care instructions can usually be found on the product’s care label or on the product page itself. We recommend following the provided guidelines to ensure the longevity and quality of your items</p>
              </div>
            )}
          </div>

           {/* Column 3 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory3(!showCategory3)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>How can I track my order ?</h4>
              <i className={`fa-solid ${showCategory3 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory3 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>Tracking your order is easy! Once your order is shipped, we’ll send you a confirmation email with a tracking number. You can use this number to track your order’s status on our Order Tracking page.</p>
              </div>
            )}
          </div>

           {/* Column 4 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory4(!showCategory4)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Do you offer gift wrapping services ?</h4>
              <i className={`fa-solid ${showCategory4 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory4 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>Yes, we offer gift wrapping services for a small additional fee. You can select this option during the checkout process.</p>
              </div>
            )}
          </div>

           {/* Column 5 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory5(!showCategory5)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>What payment methods do you accept ?</h4>
              <i className={`fa-solid ${showCategory5 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory5 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure and convenient payments.</p>
              </div>
            )}
          </div>

           {/* Column 6 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory6(!showCategory6)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Do you offer online ordering and shipping ?</h4>
              <i className={`fa-solid ${showCategory6 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory6 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>Yes, we offer online ordering with shipping options available. Contact us for more information.</p>
              </div>
            )}
          </div>

           {/* Column 7 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory7(!showCategory7)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Do you offer international shipping ?</h4>
              <i className={`fa-solid ${showCategory7 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory7 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please refer to our Shipping Information page for more details.</p>
              </div>
            )}
          </div>

           {/* Column 8 */}
            <div className='col-md-6 mb-4'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory8(!showCategory8)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>Can I sign up for exclusive offers and updates ?</h4>
              <i className={`fa-solid ${showCategory8 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory8 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>Absolutely! Join our newsletter to receive exclusive offers, promotions, and updates on the latest fashion trends. You can sign up at the bottom of our homepage.</p>
              </div>
            )}
          </div>

                     {/* Column 9 */}
            <div className='col-md-6 mb-5'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory9(!showCategory9)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>How can I contact your customer support ?</h4>
              <i className={`fa-solid ${showCategory9 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory9 && (
              <div className='px-3 pb-2 mb-3 border '>
               <p className='text-secondary '>You can reach our friendly customer support team through our Contact Us page, where you’ll find a contact form and our email address. We’re here to assist you with any questions or concerns you may have.</p>
              </div>
            )}
          </div>

                     {/* Column 10 */}
            <div className='col-md-6 mb-8'>
            <div
              className='d-flex justify-content-between pt-2 px-3  border'
              onClick={() => setShowCategory10(!showCategory10)}
              style={{ cursor: 'pointer' }}
            >
              <h4 style={{fontSize:'25px'}}>How do I create an account ?</h4>
              <i className={`fa-solid ${showCategory10 ? 'fa-solid fa-minus' : 'fa-solid fa-plus'} my-1`}></i>
            </div>
            {showCategory10 && (
              <div className='px-3 pb-2 mb-7 border '>
               <p className='text-secondary '>Creating an account is easy! Simply click on the “Sign Up” link at the top of the page and follow the prompts to enter your information. You’ll then have access to order history, wishlists, and faster checkout.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Faqpage;
