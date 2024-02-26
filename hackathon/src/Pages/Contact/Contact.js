function Contact({contactData, handleChange, handleSubmit}) {

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
              <form action=""  id="contactform" method='POST' onSubmit={handleSubmit}>
                
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="fname" value={contactData.fname} required="" onChange={handleChange}  />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lname" value={contactData.lname} required="" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={contactData.email} required="" onChange={handleChange} />
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  id="message"
                  rows={4}
                  name="message"
                  value={contactData.message}
                  required=""
                  onChange={handleChange}
                />
                <button type="submit" id="contact-btn" >
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