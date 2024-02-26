// import React from 'react'

// const CampaignsBox = (campaigns) => {
//     return (
//         <div className='campaigns-page'>
//           <div className="header d-flex justify-content-center align-items-center">
//             <h1>Upcoming Campaigns</h1>
//           </div>
    
//           <div className="camp-container">
//             <div className="campaigns-box">
    
//               {campaigns.map(campaign => (
//                 <div className="campaigns item-1" key={campaign.id}>
//                 <div className="campaign-title">
//                   <h2>
//                     {campaign.name}
//                   </h2>
//                 </div>
//                 <div className="details row">
//                   <div className="campaign-details col-12 col-lg-4">
//                     <h5>
//                       Organisor: {campaign.organisor}
//                     </h5>
//                     <h5>
//                       Location: {campaign.location}
//                     </h5>
//                     <h5>Date: {campaign.date}</h5>
//                   </div>
//                   <div className="campaign-description col-12 col-lg-4">
//                     <h5>Description:</h5>
//                     <p>
//                       {campaign.description}
//                     </p>
//                   </div>
//                   <div className="campaign-btns col-12 col-lg-4">
//                     <h5>Participate</h5>
//                     <button
//                     id="btn1"
//                     className="btn btn-primary btn-custom"
//                     data-toggle="modal"
//                     data-target="#myModal"
//                     onclick="interested(this)"
//                     >
//                     Interested
//                     </button>
//                   </div>
//                 </div>
//             </div>
//               ) )}
    
    
//             </div>
//           </div>
    
          
    
//         </div>
//       )
//     }


// export default CampaignsBox