
import React from "react";
import { useState } from "react";
import '../components/Getall.css';
import { Button } from "reactstrap";
import {Link} from 'react-router-dom';



const Getall = () => {

  const [users, setUsers] = useState([])
  const fetchData = () => {
    fetch("http://localhost:8090/admin/all/", {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      }

    })
      .then(response => {

        return response.json()

      })
      .then(data => {

        setUsers(data);
        setButtonValue(data.map(() => "BID"));
        setButtonDisabled(data.map(() => false));

      })

  }

  const handleClick = (index) => {
    setButtonValue((prev) =>
      prev.map((value, i) => (i === index ? "SOLD" : value))
    );
    setButtonDisabled((prev) =>
      prev.map((value, i) => (i === index ? true : value))
    );
  };

 const [buttonValue, setButtonValue] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState([]);

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <body>
      <div>
        <div>
          <Button onClick={fetchData} class="but">Get all items</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <table id="customers">
            <thead>
              <tr>
                <th >Name</th>
                <th>Description</th>
                <th >Bidding Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.description}</td>
                  <td>{user.price}</td>
                  <td><Link to={`/getItemById/${index}`}>
                    <button className="view">VIEW</button> 
                    </Link>
                  <button
                      className="bid"
                      onClick={() => handleClick(index)}
                      disabled={buttonDisabled[index]}
                    >
                      {buttonValue[index]}
                    </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>

  )
};
export default Getall;