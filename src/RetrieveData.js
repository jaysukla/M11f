import React from 'react';
import './App.css';
import  { useEffect, useState } from 'react';
const RetrieveData = () => {


  const [Data, setData] = useState([]);

  useEffect(() => {
  
    fetch('https://easy-jade-armadillo-tux.cyclic.app/trip/')
      .then((response) => response.json())
      .then((data) => {
      
        setData(data.data);
        
      })
      .catch((error) => {
      
        console.error(error);
      });
  }, []);



  
  const handleDelete =  async (id) => {
   
    fetch(`https://easy-jade-armadillo-tux.cyclic.app/trip/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data)
        alert(`${data.msg}`)
        window.location.reload()
      })
      .catch((error) => {
       
        console.error(error);
      });

  };



  return (


    <div id='container'>
    
     {Data.map((formData) => (
        <div key={formData.id} className="card">
          <h3>{formData.name}</h3>
          <p>Email: {formData.email}</p>
          <p>Destination: {formData.destination}</p>
          <p>No. of travellers: {formData.no_travelers}</p>
          <p>Budget Per Person: {formData.budget_per_person}</p>
          <button onClick={() => handleDelete(formData._id)}>Delete</button>
        </div>
      ))} 
   
      
    </div>
  );
};

export default RetrieveData;
