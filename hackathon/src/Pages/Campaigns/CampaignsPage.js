// import React, { useEffect, useState } from 'react'
// import CampaignsBox from './CampaignsBox'
// import NewCampaignForm from './NewCampaignForm'

// import axios from 'axios';

// const CampaignsPage = () => {

//     const [campaigns, setCampaigns] = useState([]);
    
//     useEffect(() => {
//         async function fetchCampaigns() {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/campaigns/all');
//                 setCampaigns(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         fetchCampaigns();
//     }, []);



//   return (
//     <div>
//         <CampaignsBox campaigns={campaigns}  />
//         <NewCampaignForm />
//     </div>
//   )
// }

// export default CampaignsPage