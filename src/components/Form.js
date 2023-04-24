import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  });
  
  
  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,firstName: event.target.value
  //   })
  // }
  function handleChange(e){
  const name=e.target.name
  let value=e.target.value
  setFormData({...formData,[name]:value});

  if(e.target.type==="checkbox"){
    value=e.target.checked
  }
  }

  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin}/>
      <button type="submit" >Submit</button>
    </form>
  );
}

export default Form;
