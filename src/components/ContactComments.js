import React, { useState } from "react";

const ContactComments = (props) => {
    const [commentList, setCommentList] = useState([]);

  const { contact } = props;
  const {name, comments} = contact;
  console.log(`${name}'s comments are`, comments)

// When creating a new contact, comments is undefined leading to a compiling error during the map function.
// However, on page re-load comments = an [].
  
  return null
  

  // contactList.map((contact, idx) => {
  //     const {name} = contact;
  //     return <h4 key={idx}>{name}'s comments will go here.</h4>
  // })
};

export default ContactComments;
