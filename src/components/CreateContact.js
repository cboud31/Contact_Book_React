import React, { useState } from "react";

const CreateContact = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contact, setContact] = useState("");

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <div id="CreateContact">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name, address, phoneNumber, email, contact);
          //   handleSubmit function to fetch API...
          //   reset form --> setState("");
        }}
      >
        <p>
          Name:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
        </p>
        <p>
          Address:{" "}
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>
        <p>
          Phone:{" "}
          <input
            type="text"
            placeholder="(123) 456-7890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </p>
        <p>
          Email:{" "}
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
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
          </select>
        </p>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default CreateContact;

/*

endpoint route + request Params: (`${URL}/contacts`, "POST", {
    name: "name",
    address: "address",
    phoneNumber: "(123) 456-7890",
    email: "email",
    contactType: "option"
})

*/
