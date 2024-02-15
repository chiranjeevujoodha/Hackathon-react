import React from 'react'

const Footer = () => {
  return (
<div className="sub-footer">
  <div className="container">
    <div className="row">
      <div className="col footer-box">
        <div className="div">
          <h3>BetterTomorrow</h3>
        </div>
        <p className="fw-semibold d-flex text-center">
          We understand the vital role NGOs play in creating lasting change.
          BetterTomorrow team is dedicated to supporting and collaborating with
          NGOs.
        </p>
        <div className="social-links d-flex justify-content-around ">
          <i className="ri-instagram-fill" />
          <i className="ri-facebook-fill" />
          <i className="ri-youtube-fill" />
        </div>
      </div>
      
      <div className="col footer-box sitemap">
        <h5>Sitemap</h5>
        <ul className="d-flex flex-column fw-semibold">
          <a href="/">Home</a>
          <a href="/campaigns">Campaigns</a>
          <a href="/contact">Contact Us</a>
        </ul>
      </div>
      <div className="col footer-box">
        <div className="footer-signin pb-2">
          <h5>Already a member?</h5>
          <button className="btn btn-primary">
            <a href="/signin">Sign-in</a>
          </button>
        </div>
        <div className="footer-signup pb-2">
          <h5>Become a member!</h5>
          <button className="btn btn-primary">
            <a href="/signup">Sign-up</a>
          </button>
        </div>
      </div>
    </div>
  </div>


</div>

  )
}

export default Footer