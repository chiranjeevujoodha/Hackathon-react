import React from 'react'

const Contact = () => {
  return (
    <div className="page-contact pt-md-5 pt-sm-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="text-container">
          <h1>Contact Us</h1>
          <p>
            Need to get in touch with us? Fill out the form and we will get back
            to you as soon as possible.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form-container">
          <form action="" method="post" id="contactform">
            
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" required="" />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" required="" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required="" />
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              rows={4}
              name="message"
              required=""
              defaultValue={""}
            />
            <button type="submit" id="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact