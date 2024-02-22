import React, { useState } from 'react'
import axios from 'axios'
import ContactSuccess from './ContactSuccess'
import Contact from './Contact'


const ContactPage = () => {

  const initialContactData = {
    fname: '',
    lname:'',
    email:'',
    message:'',
  }

  const [contactData, setContactData] = useState(initialContactData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {setContactData({...contactData, [e.target.name]: e.target.value})}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/contacts/', contactData);
        console.log(response.data);
        setFormSubmitted(true);
        setContactData(initialContactData);
    } catch (error) {
        console.error(error);
    }
};


  return (
    <div>
    {formSubmitted ? (<ContactSuccess />) : (<Contact contactData={contactData} handleChange={handleChange} handleSubmit={handleSubmit} />) }
    </div>
  )
}
export default ContactPage; 