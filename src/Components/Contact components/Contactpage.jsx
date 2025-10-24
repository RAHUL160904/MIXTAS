import React from 'react'

const Contactpage = () => {
  return (
    <>
     <div className='container '>
        <div className='head text-center my-5'>
          <h1 className='display-6 ' style={{fontFamily:'arial'}}><b>Contact Us</b></h1>
          <p className='my-1' style={{fontSize:"20px"}}>
            <a className='text-decoration-none text-dark' href='/' data-discover='true'>
            Home/
            </a>
             <a href="#"className='text-decoration-none text-secondary' >
            Contact Us
            </a>
          </p>
           </div>
           </div>

          <div className="container my-5">
  <div className="row text-center">

    <div className="col-lg-3 col-md-6 mb-4">
      <i className="fa-solid fa-location-dot text-light bg-dark fa-4x p-2 rounded-circle mb-3"></i>
      <h5>Store Address</h5>
      <p className="text-secondary">
        PO Box 16122 Collins<br />
        Street West Victoria<br />
        8007 Australia
      </p>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <i className="fa-solid fa-phone text-light bg-dark fa-4x p-2 rounded-circle mb-3"></i>
      <h5>Call Info</h5>
      <p className="text-secondary">
        Open a chat or give<br />
        us a call at <br />
        <b>+61 3 8376 6284</b>
      </p>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <i className="fa-regular fa-envelope text-light bg-dark fa-4x p-2 rounded-circle mb-3"></i>
      <h5>Email Support</h5>
      <p className="text-secondary">
        Send mail to <br />
        <b>support@mixtas.com</b>
      </p>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <i className="fa-regular fa-message text-light bg-dark fa-4x p-2 rounded-circle mb-3"></i>
      <h5>Live Support</h5>
      <p className="text-secondary">
        Live chat service <br />
        <b>https://www.livechat.com</b>
      </p>
    </div>

  </div>
</div>

           
           <div className="container my-5">
  <div className="row align-items-center">
    
    {/* Left: Contact Form */}
    <div className="col-lg-6 col-md-6 col-12 mb-4">
      <h2 className="text-dark mb-4" style={{ fontSize: "50px" }}>Get In Touch</h2>
      
      <input 
        type="text" 
        placeholder="Your Name" 
        className="border-bottom py-3 px-3 w-100 border-0 my-3" 
      />

      <input 
        type="text" 
        placeholder="Subject" 
        className="border-bottom py-3 px-3 w-100 border-0 my-3" 
      />

      <input 
        type="email" 
        placeholder="Your Email" 
        className="border-bottom py-3 px-3 w-100 border-0 my-3" 
      />

      <textarea 
        rows={6} 
        placeholder="Your Message (optional)" 
        className="border-bottom py-3 px-3 w-100 border-0 my-3"
      ></textarea>

      <button className="btn btn-dark px-4 my-4 py-2 rounded-0">
        Send Message
      </button>
    </div>

    {/* Right: Google Map */}
    <div className="col-lg-6 col-md-6 col-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.696701121622!2d144.9438463867357!3d-37.820572599710616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x55700729bcaebb85!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1733587516525!5m2!1sen!2sin"
        className="w-100 h-100"
        style={{ minHeight: "450px", border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </div>
</div>
      
    </>
  )
}

export default Contactpage