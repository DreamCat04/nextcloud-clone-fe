import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MessagesContainer from './MessagesContainer';

function IndividualChat() {
  const { personName } = useParams();

  // Sample messages data
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', text: 'Hello!', timestamp: '2023-11-01T10:30:00' },
    // Add more message data as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Logic to send the new message
    const timestamp = new Date().toISOString();
    const newMessageData = { id: messages.length + 1, sender: 'You', text: newMessage, timestamp };
    setMessages([...messages, newMessageData]);
    setNewMessage('');
  };

  return (
    <div>
      <h2>Chat with {personName}</h2>

      {/* Include your MessagesContainer component here */}
      <MessagesContainer/>

      <div className="message-box">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default IndividualChat;