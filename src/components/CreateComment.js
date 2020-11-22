import React, { useState } from "react";
import { fetchAPI, BASE_URL } from "../api";

const CreateComment = (props) => {
  const [content, setContent] = useState("");

  const { contact } = props;
  const {id} = contact;
  

  const submitComment = async (event) => {
    event.preventDefault();
    fetchAPI(`${BASE_URL}/contacts/${id}/comments`, "POST", {content: content})
      .then(console.log)
      .catch((e) => console.error(e));
  };

  return (
    <div id="CreateComment">
      <form>
        <input
          type="text"
          placeholder="Leave a comment.."
          style={{ width: "100%" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          // onSubmit=hitAPI, update state?
          onSubmit={(e) => {
            e.preventDefault();
            console.log(content);
          }}
        />
        <button
          onClick={submitComment}
            // console.log(`The content is ${content}`;
          
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
