import React, { useState } from "react";
import axios from "axios";
import '../components/Register.css';
const Register = () => {
  const [formValues, setFormValues] = useState({
    name:"",
    description:"",
    price: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8090/admin/save", formValues,{
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        }
    
      });
      console.log(response.data);
      alert("Item details added");
      window.location.href='/all'
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <body>
         <h1 class="column2">Celebrity Collectibles</h1>
    <div class="coulmn1">
    <form onSubmit={handleSubmit} class="form">
      <div><input type="text" placeholder="Name" name="name"
          value={formValues.name}
          onChange={handleInputChange}/></div>
      <div> <input
          type="text"
          name="description"
          placeholder="Description"
          value={formValues.description}
          onChange={handleInputChange}
        /></div>
      <div> <input
          type="number"
          name="price"
          placeholder="Bidding price"
          value={formValues.price}
          onChange={handleInputChange}
        /></div>
       <div> <button class="c">Submit</button></div>
    </form>
   
   </div>
   </body>
  );
};

export default Register;