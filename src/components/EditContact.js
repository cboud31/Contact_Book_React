import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { CreateContact, ContactList } from "../components";

const EditContact = (props) => {
  const {
    editContact,
    setEditContact,
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    contactType,
    setContactType,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="EditContact">
      {/* <h1>MAKE A FORM FOR EDIT CONTACT, PASS IN editContact as a prop</h1> */}
      <form
        className="form"
        style={{ border: "1px solid black" }}
        onSubmit={handleSubmit}
      >
        <h2>Update {name}:</h2>
        <p>
          Name:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          Address:
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>
        <p>
          Phone:
          <input
            type="text"
            placeholder="(123) 456-7890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </p>
        <p>
          Email:
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          Contact:
          <select
            className="contact-type"
            value={contactType}
            onChange={(e) => setContactType(e.target.value)}
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
        </p>
        {/* make a conditional that toggles btw button & p/w requirements? */}
        <button id="formSubmit">SUBMIT</button>

        <Link>
          <button
            onClick={<CreateContact />}
            // onClick=routes back to <CreateContact />
            // React Router!!
          >
            CANCEL
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditContact;
