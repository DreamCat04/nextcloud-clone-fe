import Message from './Message'
import axios from 'axios';
import MessageInputForm from './MessageInputForm';
import { useState, useEffect } from 'react';

function MessagesContainer(){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
    // Fetch messages and set the state here
    axios.get('http://localhost:5000/api/messages').then((response) => {
        setMessages(response.data);
        }).catch((error) => {
        console.error('Error fetching messages:', error);
        });
    }, []);

    return(
        <div className='messagesContainer'>
            {messages.map((message, index) => (
            <Message id={index} text={message.text} sender={message.sender}/>
            ))}
            <MessageInputForm></MessageInputForm>
        </div>
    );
}

export default MessagesContainer;