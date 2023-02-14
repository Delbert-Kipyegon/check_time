import React from 'react'
import './covid.css'
import axios from 'axios'



// api key = e442f5514007c831d3a0b321aabfa580c6f5bf2d5bd5e4a3bf24bc5d28a33ce5 

const Covid = () => {
  
// handling submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNo = e.target.phoneNo.value;
    // console.log(phoneNo)


    const data = {
      recipients: [
        {
          phoneNumber: phoneNo,
          amount: 300,
        	currencyCode: 'KES'
        }
      ]
    };
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'apiKey': 'e442f5514007c831d3a0b321aabfa580c6f5bf2d5bd5e4a3bf24bc5d28a33ce5 '
      }
    };
    
    axios.post('https://api.sandbox.africastalking.com/version1/airtime/send', data, config)
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    








// // setting up the creds 
// const credentials = {
// 	apiKey: ' e442f5514007c831d3a0b321aabfa580c6f5bf2d5bd5e4a3bf24bc5d28a33ce5 ',
// 	username: 'sandbox'
// };


// const AfricasTalking = require('africastalking')(credentials);

// const credit = AfricasTalking.AIRTIME;


// const options = {
// 	recipients: [
// 		{
// 			phoneNumber: phoneNo,
// 			amount: 300,
// 			currencyCode: 'KES'
// 		}
// 	]
// };

// credit.send(options)
//     .then( response => {
//         console.log(response);
//     })
//     .catch( error => {
//         console.log(error);
//     });

};

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          {/* <label htmlFor="natId">National ID</label>
          <input type="number" name="natId" /> */}
{/* 
          <label htmlFor="testNo">Test Number</label>
          <input type="number" name="testNo" /> */}

          <label htmlFor="phoneNo">Phone Number</label>
          <input type="tel" name="phoneNo" />
          
{/* 
          <label htmlFor="date">Date</label>
          <input type="date" name="date" /> */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );


};

export default Covid;

