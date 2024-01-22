import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
        <div className='footer d-flex align-item-center justify-content-evenly mt-5'>
          <div className='website' style={{ width: "400px" }}>
            <h5><i class="fa-solid fa-cart-shopping me-3"></i> E Kart</h5>
            <p style={{ textAlign: "justify", color:"white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenitinon qui aspernatur modi! Saepe beatae nostrum, ab repudiandae ullam quaerat fuga voluptatibus, fugit dolor nobis ea inciduntvoluptatem, in minima!</p>

          </div>
          <div className='links d-flex flex-column ms-5'>
            <h4>Links</h4>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
            <Link to='/wishlist' style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
          </div>
          <div className='guides d-flex flex-column ms-5'>
            <h4>Guides</h4>
            <Link to='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</Link>
            <Link to='https://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
            <Link to='https://bootswatch.com/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}>Boots Watch</Link>
          </div>
          <div className='contactus ms-5'>
            <h4>Contact us</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email' />
              <button className='btn btn-warning ms-3'>subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <Link to='https://www.facebook.com/'><i class="fa-brands fa-facebook fa-2x"></i></Link>
              <Link to='https://www.linkedin.com/'><i class="fa-brands fa-linkedin fa-2x"></i></Link>
              <Link to='https://twitter.com/'><i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link to='https://www.instagram.com/'><i class="fa-brands fa-instagram fa-2x"></i></Link>
            </div>

          </div>
        </div>
      </div>
      <p className='mt-5 text-center'>Copyright &copy; 2023 E Kart. Built with react and Redux</p>

    </>

  )
}

export default Footer