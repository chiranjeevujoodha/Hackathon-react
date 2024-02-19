import React from 'react'
import NewCampaignForm from './NewCampaignForm'

const Campaigns = () => {
  return (
    <div className='campaigns-page'>
      <div className="header d-flex justify-content-center align-items-center">
        <h1>Upcoming Campaigns</h1>
      </div>

      <div className="camp-container">
        <div className="campaigns-box">
          <div className="campaigns item-1">
            <div className="campaign-title">
              <h2>
                Blood Donation
              </h2>
            </div>
            <div className="details row">
              <div className="campaign-details col-12 col-lg-4">
                <h5>
                  Organisor: 
                </h5>
                <h5>
                  Location: 
                </h5>
                <h5>Date: 23 December 2023</h5>
              </div>
              <div className="campaign-description col-12 col-lg-4">
                <h5>Description:</h5>
                <p>
                  test
                </p>
              </div>
              <div className="campaign-btns col-12 col-lg-4">
                <h5>Participate</h5>
                <button
                id="btn1"
                className="btn btn-primary btn-custom"
                data-toggle="modal"
                data-target="#myModal"
                onclick="interested(this)"
                >
                Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewCampaignForm />

    </div>
  )
}

export default Campaigns