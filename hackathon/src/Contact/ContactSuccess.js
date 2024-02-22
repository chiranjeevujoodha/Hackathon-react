import Alert from 'react-bootstrap/Alert';

function ContactSuccess() {
  return (
    <>
      {[

        'success',

      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default ContactSuccess;