import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlog } from '../features/blogs/blogSlice'
import moment from 'moment'


const Home = () => {
   const blogState = useSelector((state) => state?.blog?.blog)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getAllBlog())
   }, [])

   return <>
      <Container class1='home-wrapper-1 py-5'>
         <div className="row">
            <div className="col-6">
               <div className="main-banner position-relative">
                  <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main-banner" />
                  <div className="main-banner-content position-absolute">
                     <h4>SUPERCHARGED FOR PROS.</h4>
                     <h5>iPad S13+ Pro.</h5>
                     <p>From $999.00 or $41.62/mo.</p>
                     <Link className='button'>BUY NOW</Link>
                  </div>
               </div>
            </div>
            <div className="col-6">
               <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                  <div className="small-banner position-relative">
                     <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main-banner" />
                     <div className="small-banner-content position-absolute">
                        <h4>BEST SALE</h4>
                        <h5>Laptops Max</h5>
                        <p>From $1699.00 <br /> or $64.62/mo.</p>
                     </div>
                  </div>
                  <div className="small-banner position-relative">
                     <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main-banner" />
                     <div className="small-banner-content position-absolute">
                        <h4>15% OFF</h4>
                        <h5>Smartwatch 7</h5>
                        <p>Shop the latest band <br /> styles and colors.</p>
                     </div>
                  </div>
                  <div className="small-banner position-relative">
                     <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main-banner" />
                     <div className="small-banner-content position-absolute">
                        <h4>NEW ARRIVAL</h4>
                        <h5>Buy IPad Air</h5>
                        <p>From $599 or $49.92/mo.</p>
                     </div>
                  </div>
                  <div className="small-banner position-relative">
                     <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main-banner" />
                     <div className="small-banner-content position-absolute">
                        <h4>FREE ENGRAVING</h4>
                        <h5>AirPods Max</h5>
                        <p>High-fidelity playback & <br /> ultra-low distortion</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
         <div className="row">
            <div className="col-12">
               <div className="services d-flex align-items-center justify-content-between">
                  {
                     services?.map((i, j) => {
                        return (
                           <div className="d-flex align-items-center gap-15" key={j}>
                              <img src={i.image} alt="services" />
                              <div>
                                 <h6>{i.title}</h6>
                                 <p className="mb-0">{i.tagline}</p>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
         <div className="row">
            <div className="col-12">
               <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Computers & Laptop</h6>
                        <p>8 Items</p>
                     </div>
                     <img src="images/laptop.avif" alt="laptop" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Cameras & Videos</h6>
                        <p>10 Items</p>
                     </div>
                     <img src="images/speaker.webp" alt="speaker" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Smart Television</h6>
                        <p>12 Items</p>
                     </div>
                     <img src="images/tv.jpg" alt="tv" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Smart Watches</h6>
                        <p>13 Items</p>
                     </div>
                     <img src="images/gaming.webp" alt="watch" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Mobiles & tablets</h6>
                        <p>20 Items</p>
                     </div>
                     <img src="images/mobile.webp" alt="mobile" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Music & Gaming</h6>
                        <p>6 Items</p>
                     </div>
                     <img src="images/gaming.webp" alt="gaming" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Headphones</h6>
                        <p>10 Items</p>
                     </div>
                     <img src="images/headphone.jpg" alt="watch" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                     <div>
                        <h6>Cameras</h6>
                        <p>10 Items</p>
                     </div>
                     <img src="images/camera.jpg" alt="camera" />
                  </div>
               </div>
            </div>
         </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
         <div className="row">
            <div className="col-12">
               <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </Container>

      <Container class1='famous-wrapper py-5 home-wrapper-2'>
         <div className="row">
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src="images/famous.webp" className='img-fluid' alt="famous" />
                  <div className="famous-content position-absolute">
                     <h5>Big Screen</h5>
                     <h6>Smart Watch Series 7</h6>
                     <p>From $399or $16.62/mo. for 24 mo.*</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src="images/famous-02.webp" className='img-fluid' alt="famous" />
                  <div className="famous-content position-absolute">
                     <h5 className='text-dark'>Studio Display</h5>
                     <h6 className='text-dark'>600 nits of brightness.</h6>
                     <p className='text-dark'>27-inch 5K Retina display</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src="images/famous-03.webp" className='img-fluid' alt="famous" />
                  <div className="famous-content position-absolute">
                     <h5 className='text-dark'>smartphones</h5>
                     <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                     <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src="images/famous-04.webp" className='img-fluid' alt="famous" />
                  <div className="famous-content position-absolute">
                     <h5 className='text-dark'>home speakers</h5>
                     <h6 className='text-dark'>Room-filling sound.</h6>
                     <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                  </div>
               </div>
            </div>
         </div>
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
         <div className="row">
            <div className="col-12">
               <h3 className="section-heading">Special Products</h3>
            </div>
         </div>
         <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
         </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
         <div className="row">
            <div className="col-12">
               <h3 className="section-heading">Our Popular Products</h3>
            </div>
         </div>
         <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
         </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
         <div className="row">
            <div className="col-12">
               <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee className='d-flex'>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-01.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-02.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-03.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-04.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-05.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-06.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-07.png" alt="brand" />
                     </div>
                     <div className='mx-4 w-25'>
                        <img src="images/brand-08.png" alt="brand" />
                     </div>
                  </Marquee>
               </div>
            </div>
         </div>
      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'>
         <div className="row">
            <div className="col-12">
               <h3 className="section-heading">Our Lastest Blogs</h3>
            </div>
            <div className="row">
               {
                  blogState && blogState?.map((item, index) => {
                     if (index < 3) {
                        return (
                           <div className="col-3" key={index}>
                              <BlogCard
                                 id={item?._id}
                                 title={item?.title}
                                 description={item?.description}
                                 image={item?.images[0]?.url}
                                 date={moment(item?.created_at).format('MMMM Do YYYY, h:mm a')}
                              />
                           </div>
                        )
                     }
                  })
               }
            </div>
         </div>
      </Container>
   </>
}

export default Home