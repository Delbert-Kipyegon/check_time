import React from 'react'

const Tb = () => {
  return (
<>
<form action="">
      <label htmlFor="name">Name</label>
      <input type="text"  name='name'/>

      <label htmlFor="natId">National ID</label>
      <input type="text"  name='natId'/>

      <label htmlFor="testNo">Test Number</label>
      <input type="text"  name='testNo'/>

      <label htmlFor="phoneNo">Phone Number</label>
      <input type="tel"  name='phoneNo'/>

      <label htmlFor="date">Date</label>
      <input type="date"  name='date'/>

      {/* <label htmlFor=""></label>
      <input type="text"  name='name'/> */}


    </form>
</> 
 )
}

export default Tb