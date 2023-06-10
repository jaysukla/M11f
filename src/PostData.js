import React from 'react';
import  { useState } from 'react';


const PostData = () => {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('India');
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState(0);



  const handleSubmit = (e) => {
    e.preventDefault();

 
    const formData = {
      name,
      email,
      destination,
      "no_travelers": travelers,
       "budget_per_person":budget
    };

   
    fetch('https://easy-jade-armadillo-tux.cyclic.app/trip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        
       alert(`${data.mag}`)
      })
      .catch((error) => {
        // Handle any error that occurred during the API request
        console.error(error);
      });
  };







  return (
    <div>
      <h2>Post Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Destination:
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
        </label>
        <br />
        <label>
          No. of travellers:
          <input type="number" value={travelers} onChange={(e) => setTravelers(e.target.value)} />
        </label>
        <br />
        <label>
          Budget Per Person:
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostData;
