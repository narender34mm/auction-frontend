import { useEffect, useState } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import React from "react";
import "../components/Getitem.css";


const Getitem = () => {
  const [details, setDetails] = useState({ 
    id:"",
    name:"",
    description:"",
    price:"",
  });
  const { id } = useParams();

  
  useEffect(() => {
    loadUsers();
  });
 
  const loadUsers = async () => {

    
    try {
      await axios.get(`http://localhost:8090/admin/1`,{
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        }
    
      })

      
      
  } catch (err) {
        console.log(err);
        setDetails(err.response.data);
  }
  };
  

  
  return (
    <body>
      <div class="item">
       <b>Item id :</b>
       {details.id}
       <br></br>
       <b>Name :</b>
       {details.name}
       <br></br>
       <b >Description :</b>
       {details.description}
       <br></br>
       <b >Billing Price :</b>
       {details.price}
       <br></br>
      </div>
    </body>
  );
}
export default Getitem;