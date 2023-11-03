import axios from "axios";
import { useState } from "react";

async function sendMessageToAPI(message){
    try {
    const response = await axios.post('http://localhost:5000/api/messages', {
      text: message,
    });
    console.log('Message sent successfully:', response.data);
    // Handle success, update the UI, etc.
  } catch (error) {
    console.error('Error sending message:', error);
    // Handle errors, show an error message, etc.
  }
}

function MessageInputForm(){
  const [message, setMessage] = useState();
    return (
        <div className="messageInputForm">
            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => sendMessageToAPI(message)}>Send</button>
        </div>
    );
}

export default MessageInputForm;