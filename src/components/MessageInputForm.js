import axios from "axios";
import { useState } from "react";
import '../css/MessageInputForm.css'

function MessageInputForm(){

  const [message, setMessage] = useState();

  async function sendMessageToAPI(message){
  try {
    const response = await axios.post('http://localhost:5000/api/messages', {
    text: message,
  });
    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error);
  }
}
  return (
      <div className="messageInputForm">
          <input
          type="text"
          className="messageBox"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={() => sendMessageToAPI(message)}>Send</button>
      </div>
  );
}

export default MessageInputForm;