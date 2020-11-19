export const BASE_URL = `https://univ-contact-book.herokuapp.com/api`;


export async function fetchAPI(url, method="GET", sendData=null) {
    const fetchOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvcnkiLCJpYXQiOjE2MDU1NzQxMDYsImV4cCI6MTYwNjE3ODkwNn0.ZjrN5lrbc_aNxQ1ANovf7nASM30TCWmDtIx-WUHAsI0'
      }
    };
  
    if (sendData) {
      fetchOptions.body = JSON.stringify(sendData);
    }
  
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
  
    return data;
}

