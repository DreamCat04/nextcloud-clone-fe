import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import axios from 'axios';
import { useState, useEffect } from 'react';


function ChatList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user-contacts').then((response) => {
        setContacts(response.data);
        }).catch((error) => {
        console.error('Error fetching contacts:', error);
        });
    }, [contacts]);

  return (
    <div className="chat-list-container">
      <div className="contacts-list">
        <h2>Contacts</h2>
        {contacts.map((chat) => (
          <Link key={chat.id} to={`/chat/${chat.username}`}>
            <Contact personName={chat.username} />
          </Link>
        ))}
      </div>
      <div className="main-window">
        <Link to="/no-chat">Select a chat</Link>
      </div>
    </div>
  );
}

export default ChatList;