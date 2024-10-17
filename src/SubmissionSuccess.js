import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <div>
      <h1>Thank You!</h1>
      <p>
        Thank you, {name}! Your message has been sent. Here are the details:
      </p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
};

export default SubmissionSuccess;
