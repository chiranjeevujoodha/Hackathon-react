import React, { useState } from 'react'
import axios from 'axios'

const NewCampaignForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        organisor:'',
        location:'',
        date:'',
        description:''
    });

    const handleChange = (e) => {setFormData({...formData, [e.target.name]: e.target.value})}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
    <div>
        <div className="container new-campaign" id="campaigns-form">
        <div className="new-campaign-form">
          <h5 className="text-center">Add New Campaign</h5>
          <hr />
          <form onSubmit={handleSubmit} id="campaignForm">
            
            <label htmlFor="name">Name of Campaign</label>
            <input type="text" id="name" name="name" value={formData.name} required="" onChange={handleChange} />
            <label htmlFor="organisor">Organisor</label>
            <input type="text" id="organisor" name="organisor" value={formData.organisor} required="" onChange={handleChange} />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={formData.location} required="" onChange={handleChange} />
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              id="description"
              rows={4}
              name="description"
              value={formData.description}
              defaultValue={""}
              onChange={handleChange}
            />
            <button type="submit" id="campaign-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewCampaignForm