import React from 'react'
import Navbar from '../Components/Common Components/Navbar';
import Footer from '../Components/Common Components/Footer';
const Wishlist = () => {
  return (
    <>
    <Navbar/>
    <div class="container-fluid px-lg-5"><div class="my-5"><p class="my-4"><a class="text-decoration-none text-dark" href="/" data-discover="true"><b> Home </b> </a> &gt; cart</p><h1 class="fs-1 display-3"><b>Wishlist</b></h1></div><div class="col-12 my-5"><div class="text-center my-4"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAABlCAYAAABDXr0GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAVtSURBVHhe7Z09SyRBEIbv16ooggYiimIifmSm/onVRCMjwcTETFCMFEEQDMRA8KPv3mX6bvR6x5mq6p6unnqgWHV3env7GceqmR77lzPUYvIUY/IUY/IUY/IUY/IUY/IUY/IUY/IUIyrv7u7OHR8fu9fX1+onBnh+fnaj0Wj8KImYvJubG7e0tOSmpqbc3t6ee3l5qZ4ZNk9PT25zc3M8LhsbG+7x8bF6ho+IvIeHB7eysjLuoI+dnR3xPU0bEAVh9XFZXl52t7e31St4sOVB0NbW1pcO+sAehz1viGCHXltbC44LjlA4UnFhyWsS52OIApvE+VhYWHCXl5fVFjTI8vA3bXt7O9ix7yF9rM+ZNuJ8QODV1VW1ZXdI8iBud3c32KFJMQSBob/9P8Xq6ip5XMjy2v7W1QN7JD5giVDEIfb3993b21vVSjfIh816CtwlShRIFYejF6ekYiUsoVS4TeCDliKQKg5HLm4tzJIH0Pm2f6DrUYLA+/t7kjhk6BI1MFseGKJAqjjJ0klEHqAePrANBkITVHFZnh7zDEEgVVyMRE1UHihZYE7igLg8UKJAqjhsE0MciCIPlCQwR3EgmjzA+dC5CMxVHIgqD1A/vOR1Lyp4f/Qj1L+mSCEORJcHNArkiEt11EgiD1AFSl247EJ9SkeXSCkOJJMHqAIXFxfd9fV11Upc8D54v1A/miK1OJBUHqAK5F64bAPax/uE3r8p+hAHkssDHIHcqQOTQLuaxIFe5AGOwIuLi6oVGdCeNnGgN3kgB4FaxYFe5QFqSj4/P+/Oz8+rVmhge7QTar8pcqhBQe/yADU1n5ubc2dnZ1Ur3cB22D7UblP0UbpMIgt5gJqiz87OdhaI12O7UHtNkbJkaUM28gA1VYeI09NT9/n5WbUUBs/jdRRx6FfsUqUrWckDHIEnJycTBeLneL4UcSA7eYBac00SyBUXq7bkkqU8QE3hIejo6OivQDzie6o46ZpSkmzlAWoqPzMz4w4PD93Hx8f4Ed+HXtcUEqVIbLKWB6gp/fT09Pg+ADyGnm8KTgmSkuzlAWpqTwm8jwZxQIU8kEKgJnFAjTwkHtQarU2g3Ta1Yk6okQc4KX9ToL2mGjFXVMkDnNQ/FGinXlpoQp08gIGmlgD18CWFRnFApTyAAT84OCCVAghsh+21igMmz+SlBQNuh01LWCxhSQUG2EqFf6iRh4G1Iv0rauTZ6bH/USEvhTgfmgRmLw8DaZeEwmQtzy7GNpOtPMlpEFSBNg2CQIwJSByBNgGpJTGn/lGLe/THpv79AEdcmxqtNIHZyEs13Z0j0Ka7B0h9owkEUk+z2Y0mNfq6xYsj0G7x+kPfN1dCIPV86aBvrszhrligWWAv8jjiYtRcWgUml8cRFztVR/KjSWBSeVRxKVN0TQKTyaOK6yM1h0DKlYzUApPIo/7vzT5Tcg0Co8vTKM5DvSSFz6v+XzZSxaXce38iZ4HR5JUgzpOrwCjyShLnoV4cjilQXB46Sl3dJFdxntwEisorWZwnJ4Fi8jgremkR56FO05AWKCKPupaeRnEeqkDJ1U3Y8tos+hsKzeI81GkbUgJZ8qjLj5YgzkMVKLGiF1keZdFfhPRxPweo82+4a+mR5GGBWixUG+pQU5QozkMVyFl+lCQPv+64DyDUmUlRsjgPRWByeaDLsT7W+nE50mUmHHeHZiUsbdLlIYnztBGIcePODGDJA00dHaI4T9OURlypp8w3/Q5bHgh1VHpxW42ExkVKHBCRB+qnxySXk9ZOXaCkOCAmD+Bsy2g0ElnAvSRwQmJ9fV1UHBCVZ0zm/f29+koOk6cYk6cYk6cYk6cYk6cYk6cYk6cW534DWc7Jr3XV2YYAAAAASUVORK5CYII=" alt="" height="75"></img><p class="text-secondary my-4">No products added to the wishlist</p></div></div><div><p class="display-5 fs-4"><b>Share on:</b></p><div class="d-flex">
      <i class="p-1 text-light  mx-1 m-3 fs-4 bg-primary fa-brands fa-facebook"></i>
      <i class="p-1 text-light mx-1 m-3 fs-4 bg-info fa-brands fa-x-twitter"></i>
      <i class="p-1 text-light mx-1 m-3 fs-4 bg-danger fa-brands fa-pinterest"></i>
      <i class="p-1 text-light mx-1 m-3 fs-4 bg-warning fa-regular fa-envelope"></i>
      <i class="p-1 text-light mx-1 m-3 fs-4 bg-success fa-brands fa-whatsapp"></i>
      </div></div></div>
    
    
    
    <Footer/>
    </>
  )
}

export default Wishlist