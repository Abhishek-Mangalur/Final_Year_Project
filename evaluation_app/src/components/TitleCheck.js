import React, { useState } from 'react';
import './TitleCheck.css'; // Optional CSS for styling

const TitleCheck = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);

  const checkNameAvailability = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/check-title', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const result = await response.json();
      setIsAvailable(result.available);
      setMessage(result.message);
    } catch (error) {
      console.error('Error checking name:', error);
      setMessage('An error occurred. Please try again.');
      setIsAvailable(null);
    }
  };

  return (
    <div className="name-check-container">
      <h2>Check Name Availability</h2>
      <input
        type="text"
        placeholder="Enter the title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={checkNameAvailability} // Trigger on blur (or you can use a button instead)
      />
      <p className={`message ${isAvailable ? 'available' : 'taken'}`}>{message}</p>
    </div>
  );
};

export default TitleCheck;
