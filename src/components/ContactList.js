import React from "react";
import { fetchAPI, BASE_URL } from "../api";

const ContactList = (props) => {
  const { contactList, deleteFromContactList } = props;

  const handleDelete = (contact) => {
    fetchAPI(`${BASE_URL}/contacts/${contact.id}`, "DELETE")
      .then(console.log)
      .catch(console.error);
  };

  return (
    <div id="ContactList">
      {contactList.map((contact, idx) => {
        const { name, address, phoneNumber, email, contactType, comments } = contact;
        console.log(comments)
        

        return (
          <div
            className="card"
            key={idx}
            style={{
              border: "1px solid black",
              marginTop: "3rem",
            }}
          >
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
            <p>{contactType}</p>
            {/* <div className="comments">{comments.length === 0
            ? null
            : comments.map( (comment, idx) => {
                const {content} = comments;
                return <div className="comments" key={idx}><p>{content}</p></div>
            })
                
                }</div> */}
            <p>              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(contact);
                  deleteFromContactList(contact);
                }}
              >
                DELETE
              </button>
              <button>EDIT</button>
              <button>COMMENT</button>
              {/* Links to <CommentList />? */}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
