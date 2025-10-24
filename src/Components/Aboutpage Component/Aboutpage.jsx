import React, {useState} from 'react'
import { aboutImage } from '../../assets/Images/assets'


const Aboutpage = () => {
    // const[aboutImage]=assets
    const[active,setActive]=useState('Mixtas')

    const aboutmixtas=()=>{
        setActive('Mixtas')
    }
    const ourstory=()=>{
        setActive('Our Story')
    }
    const ourmission=()=>{
        setActive('Our Mission')
    }
    const connectwith=()=>{
        setActive('Connect With Us')
    }
  return (
    <>
    <div className="bg-dark text-light text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "300px" }}>
  <div className="container">
    <h2
      className="mx-auto p-3 p-md-4"
      style={{ fontSize: "clamp(20px, 4vw, 40px)", lineHeight: "1.4" }}
    >
      Discover the Art of Dressing Where <br />
      Every Stitch Tells a Story and Every <br />
      Outfit Paints a Picture.
    </h2>
  </div>
</div>


    <div className="container my-3">
  <div className="d-flex flex-lg-row flex-md-wrap flex-sm-wrap flex-wrap justify-content-center gap-5 p-3 bg-light my-4">
    <h3
      onClick={aboutmixtas}
      style={{ cursor: "pointer" }}
      className={`${active === "Mixtas" ? "fw-bold text-dark" : "text-secondary"}`}
    >
      About Mixtas
    </h3>

    <h3
      onClick={ourstory}
      style={{ cursor: "pointer" }}
      className={`${active === "Our Story" ? "fw-bold text-dark" : "text-secondary"}`}
    >
      Our Story
    </h3>

    <h3
      onClick={ourmission}
      style={{ cursor: "pointer" }}
      className={`${active === "Our Mission" ? "fw-bold text-dark" : "text-secondary"}`}
    >
      Our Mission
    </h3>

    <h3
      onClick={connectwith}
      style={{ cursor: "pointer" }}
      className={`${active === "Connect With Us" ? "fw-bold text-dark" : "text-secondary"}`}
    >
      Connect With Us
    </h3>
  </div>


        {active === 'Mixtas' && (
               <div className='container'>
                  {aboutImage
                  .filter((value) => value.category === 'about')
                  .map((value,index)=>(
                      <div className='row' key={index}>
                                <div className='col-lg-6 col-md-6 col-sm-6 '>
                                     <img src={value.img} alt='' srcSet='' style={{width:'90%', height:'auto'}}></img>
                                </div>
                              
                               <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center gap-2">
                            <h2 className="fw-bold"
                                style={{ fontSize: "clamp(22px, 3vw, 40px)", maxWidth: "500px" }}>
                                Unveiling Your Unique Fashion Journey
                            </h2>
                            <p className="text-secondary"
                                style={{ fontSize: "clamp(20px, 2vw, 20px)" }}>
                                Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing – 
                                it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, 
                                embraces trends, and empowers you to express yourself through clothing.
                            </p>
                            </div>

                             </div>   
                  
                    ))}
               </div>
        )}

           {active === 'Our Story' &&(
            <div className='container'>
                <div className='d-flex flex-column gap-3 my-5'>
                       <div>
                        <p className='text-secondary'>In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story.</p>
                        <p className='text-secondary'>Founded [Year], [Your Store Name] emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it’s a canvas for self-expression, an art form that reflects individuality.</p>
                        <p className='text-secondary'>What sets us apart is our dedication to offering more than just garments – we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at [Your Store Name] is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics</p>
                        <p className='text-secondary'>At [Your Store Name], we understand that fashion is more than a fleeting moment; it’s an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store.</p>
                        <p className='text-secondary'>Beyond the racks of clothing, [Your Store Name] is a community – a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time.</p>
                        <p className='text-secondary'>As we continue to evolve, our commitment remains unwavering – to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at [Your Store Name].”</p>
                        <p className='text-secondary'>Feel free to customize the details to align with your store’s unique history and vision.</p>
                        </div>
                    </div>
                </div>
           )}

           {active ==='Our Mission' &&(
            <div className='container'>
                <div className='d-flex flex-column gap-3 my-5'>
                        <div>
                           <p className='text-secondary'>At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.</p>
                           <p className='text-secondary'>1.<b>Curate Exceptional Style:</b> We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.</p>
                           <p className='text-secondary'>2.<b>Quality Craftsmanship:</b> We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.</p>
                           <p className='text-secondary'>3.<b>Celebrate Diversity:</b> Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.</p>
                           <p className='text-secondary'>4.<b>Customer Empowerment:</b> We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections.</p>
                           <p className='text-secondary'>5.<b>Sustainable Choices:</b> As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.</p>
                           <p className='text-secondary'>6.<b>Community Engagement:</b> [Your Store Name] is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging.</p>
                           <p className='text-secondary'>7.<b>Innovation and Adaptability:</b> In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience.</p>
                           <p className='text-secondary'>At [Your Store Name], our mission is not just about selling clothes; it’s about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”</p>
                           <p className='text-secondary'>Feel free to modify the mission statement to align with the specific values and goals of your clothing store.</p>
                        </div>
                    </div>
                </div>
           )}

           {active ==='Connect With Us' &&(
              <div className='container'>
                 <div className='d-flex flex-column gap-3 my-5'>
                       <div>
                        <h1>Affilate Program</h1>
                        <ul className='text-secondary'>
                            <li>Build your own online sporting goods store!</li>
                            <li>If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.</li>
                             <li>Click here to join now and earn commissions of up to 6%</li>
                        </ul>
                        </div>
                    </div>
                </div>
           )}
           

           <h1 className="display-5 text-center p-5">Meet Our Team</h1>
<div className="container d-flex flex-wrap justify-content-center gap-4">
  {aboutImage
    .filter((value) => value.category === "team")
    .map((value, index) => (
      <div key={index} className="text-center" style={{ maxWidth: "400px" }}>
        <img
          src={value.img}
          alt={value.name}
          className="img-fluid mb-4"
          style={{ height: "400px", width: "300px", objectFit: "cover" }}
        />
        <h4 className="text-dark">{value.name}</h4>
        <p className="text-secondary">{value.role}</p>
      </div>
    ))}
</div>

        
        </div>

    </>
  )
}

export default Aboutpage