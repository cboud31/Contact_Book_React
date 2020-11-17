import React, { useState, useEffect } from "react";

import { fetchAPI } from "../api";
import {CreateContact} from "../components";


const App = () => {
  const URL = `https://univ-contact-book.herokuapp.com/api`;

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetchAPI(`${URL}/contacts`)
      .then(function (data) {
        console.log("my contacts", data);
      })
      .catch(function (error) {
        console.error("error fetching contacts", error);
      });
  }, []);

  return (
    <div id="App">
      <h1>Make some data on Postman!!</h1>
      <CreateContact />
    </div>
    
  );
};

export default App;
