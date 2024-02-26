// import Alert from 'react-bootstrap/Alert';
import Alert from '@mui/material/Alert';



function ContactSuccess() {
  return (
    <Alert severity="success"  >Message submitted successfully</Alert>
  )
}

// function ContactSuccess() {
//   return (
//     <>
//       {[

//         'success',

//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           Message sent successfully.
//         </Alert>
//       ))}
//     </>
//   );
// }

export default ContactSuccess;