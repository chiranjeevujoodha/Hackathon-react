import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="page1">
          <div className="banner mt-5 pt-md-5">
              <div className="banner-box text-center mt-5 pt-5">
                  <h3 className="fw-semibold mt-5 mb-5">
                  Catalyzing global change through a collaborative platform, our mission
                  is to unite diverse changemakers, amplify shared efforts, and forge a
                  resilient community committed to shaping a sustainable and equitable
                  future.
                  </h3>
                  <h3 className="fw-semibold text-center mb-5">
                  Be part of something bigger.
                  </h3>
                  <button className="btn btn-primary">
                  <a className="fw-semibold" href="/campaigns">
                      Explore our campaigns
                  </a>
                  </button>
              </div>
          </div>
      </div>
      <div class="about pt-md-5 pb-md-5">
        <div class="about-title text-center">
          <h2 class="fw-semibold">About Us</h2>
        </div>
        <div class="container about-content text-center pt-md-5">
          <h3 class="fw-semibold">At BetterTomorrow, we believe in the power of collective action to create positive change. Our platform is a hub for individuals who want to make a difference and NGOs dedicated to driving impactful campaigns. 
            Together, we strive to build a better world—one campaign at a time.</h3>
        </div>
      </div>

    </div>
    

  )
}

export default Home