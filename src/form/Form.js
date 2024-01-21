import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    // Check if username and age are not empty
    if (username.trim() === '' || age.trim() === '') {
      setErrorMessage('Please enter valid input.');
      return; // Exit the function if input is not valid
    }

    // Clear error message
    setErrorMessage('');

    // Update the submittedData state with the entered username and age
    setSubmittedData([...submittedData, { username, age }]);
    
    // Reset input fields
    setUsername('');
    setAge('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Username:</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Age(years):</label>
          <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Add User</button>
        </div>

        <center>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {submittedData.length > 0 && (
            <div>
              <h2>Data:</h2>
              {submittedData.map((user, index) => (
                <div key={index}>
                  <p>Username: {user.username}</p>
                  <p>Age: {user.age}</p>
                </div>
              ))}
            </div>
          )}
        </center>
      </form>
    </div>
  );
};

export default Form;
