import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';   // ✅ useLocation added
import { homeBlogData } from '../assets/Images/assets';
import Footer from '../Components/Common Components/Footer';  
import Bimage from '../assets/Images/blog1.png';
import Bimage1 from '../assets/Images/blog2.png'; 
import Navbar from '../Components/Common Components/Navbar';

const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  // ✅ Get the blog id passed from Blogswiper
  const blogId = location.state?.blog;

  // ✅ Find the matching blog
  const blog = homeBlogData.find((item) => item.id === blogId);

  if (!blog) {
    return (
      <div className="container my-5 text-center">
        <h2>Blog not found</h2>
        <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <>
    <Navbar />
      {/* ✅ Show single blog */}
      <div className="container my-5">
        <h1 className="display-5">{blog.desc}</h1>
        <div className="d-flex align-items-center mb-3">
          <img
            src={Bimage1}
            className="rounded-circle"
            width="30"
            alt="admin"
          />
          <span className="mx-2 text-secondary">• December 14, 2023</span>
        </div>
        <img
          src={blog.img}
          alt={blog.name}
          className="img-fluid  "
          style={{ height: '750px', width: '100%', objectFit: 'cover' }}
        />
      </div>
       
        <div className="container mt-5 mb-5">
            <div className=" w-75 my-3 fs-5"style={{margin:'auto'}}>
            <p className="text-secondary " >What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some<br></br> of the coolest, most shopping-savvy people we know—from small-business owners to<br></br> designers, artists, and actors—to tell us the story behind one of their most prized possessions.</p>
            <h1 className='my-4 mb-4 'style={{margin:'auto',fontSize:'30px'}}><b>Who?</b></h1>
            <p className='text-secondary mb-2'>Phoebe Sung and Peter Buer met and fell in love as fashion school students in mid-aughts Boston. After they graduated, the couple began to craft together as a way to decompress from their corporate fashion jobs. They made jewelry, then bags, then home goods like wall hangings, which were ultimately the gateway to launching their now-beloved New York–based textile brand Cold Picnic.</p>
            <img src={Bimage} className='img-fluid my-4' style={{height:'500px',width:'100%',objectFit:'cover'}} alt="blog" />
            <p className='text-secondary mb-2'>Since 2010, Phoebe and Peter have been designing colorful, abstract rugs and bath mats that double as works of art. Nearly every collection is informed by old movies, either in composition (they print out stills and trace shapes over them) or palette (think retro hues). “There was one series of films that we were really inspired by that were all set in the desert, so the colors were very chalky and powdery but still saturated,” Phoebe shares. “We still use a lot of peaches and mints and citrons and tans.”</p>
            <h1 className='my-4 mb-4 'style={{margin:'auto',fontSize:'30px'}}><b>What?</b></h1> 
             <p className='text-secondary mb-3'>The couple’s 1910s Ridgewood, Queens, home is filled with their own creations, including a HAY sofa (the Mags Soft Low sectional to be exact) that they reupholstered using hand-tufted rugs after the sofa’s original pink tweed got ruined. “We were trying to think of what kind of upholstery we could actually live with and the rugs are pretty durable,” Phoebe says. “We thought that something a little bit heartier with a lot of color and design would survive our family.”</p>
             <p className='text-secondary mb-2'>For the sofa’s seat and back cushions, Phoebe and Peter chose designs from their Beau Travail collections, which are an homage to the Claire Denis film of the same name. But instead of using the handmade, high-low pile wool rugs that are sold on the Cold Picnic website, Peter tufted the rugs himself—twice. “He bought a frame and a gun and he watched all these videos, but we used the wrong glue backing, so it was too stiff and he had to do it all over again,” Phoebe laments.</p>
             <h1 className='my-4 mb-4 'style={{margin:'auto',fontSize:'30px'}}><b>Where and When?</b></h1>
            <p className='text-secondary mb-2'>Peter undertook this grueling project at home in 2021—injuring his back in the process. “Everything he does, he does very intensely. He just wanted to finish it, but then he put his back out and couldn’t walk or get out of bed for a week after. He paid for it, but it was worth it,” Phoebe says, adding that a local upholsterer then covered the HAY sofa in the hand-tufted rugs and a greenish-mustard wide wale corduroy.</p>
             <h1 className='my-4 mb-4 'style={{margin:'auto',fontSize:'30px'}}><b>Why?</b></h1>
             <p className='text-secondary mb-2'>In addition to being durable and stylish, the one of a kind sectional holds lots of sentimental value for the couple. “I actually had a mustard corduroy sofa growing up, so it’s nostalgic, but it is our take on it,” Phoebe explains. “And that’s how we think about designing. That’s why we always use old movies and these ’70s powdery palettes. It’s exactly our personal style, which is hard to encapsulate.”</p>
           <p className='text-secondary mb-2'>Phoebe and Peter paired their special sofa with one of the rugs that’s featured in the design, the Denis Denis, , as well as a vintage coffee table, a Noguchi-style pendant, and a papier-mâché tulip lamp they made during the pandemic. “We thought using one of the rugs that it was based on would be too much, so we made a brown rug to go with it, but actually that was too much,” Phoebe says. “The effect was more low-key when we just really went for it and did the whole room in the same print.”</p>
           
           <div class="d-flex my-4">
            <i class="bg-dark text-light p-1 m-2 fa-brands fa-facebook"></i>
            <i class="bg-dark text-light p-1 m-2 fa-brands fa-x-twitter"></i>
           <i class="bg-dark text-light p-1 m-2 fa-brands fa-linkedin"></i>
           
           </div>
           <hr></hr>
           <div class="d-flex justify-content-between"><div class="d-flex gap-2 align-items-center"></div><div><div class="d-flex text-end"><div><a class="text-decoration-none text-dark" href="/blog/1" data-discover="true">NEXT POST</a><p class=" my-2">Tailored Tales: Unveiling the Latest Trends in Men's Fashion . . .</p></div><div><i class="fa-solid text-secondary fa-arrow-right mx-3"></i></div></div></div></div>
           <hr className='m-0'></hr>
           <div><div class="my-5"><h3>Leave a Reply</h3><p class="text-secondary">Your email address will not be published. Required fields are marked *</p></div><div class="my-4"><p>Comment *</p><textarea name="" class="w-100" rows="8" id=""></textarea></div><div class="my-4 row"><div class="col-lg-4 col-md-4 col-sm-12"><p>Name *</p><input type="text" class="w-100 p-2"></input></div><div class="col-lg-4 col-md-4 col-sm-12"><p>Email *</p><input type="email" class="w-100 p-2"></input></div><div class="col-lg-4 col-md-4 col-sm-12"><p>Website</p><input type="url" class="w-100 p-2"></input></div></div><div><input type="checkbox"></input><label for="" class="mx-3 text-secondary">Save my name, email, and website in this browser for the next time I comment.</label></div><button class="btn btn-dark px-4 py-2 my-5">Post Comment</button></div>
           </div>
</div>
         


      <Footer />
    </>
  );
};

export default Blog;
