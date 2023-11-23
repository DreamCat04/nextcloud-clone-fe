import Message from './Message'
import axios from 'axios';
import MessageInputForm from './MessageInputForm';
import { useState, useEffect } from 'react';
import '../css/MessagesContainer.css';
import avatarImg from '../img/user-profile-picture.png'

function MessagesContainer(){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
    // Fetch messages and set the state here
    axios.get('http://localhost:5000/api/messages').then((response) => {
        setMessages(response.data);
        }).catch((error) => {
        console.error('Error fetching messages:', error);
        });
    }, [messages]);

    return(
        <div className='messagesContainer'>
            {messages.map((message, index) => (
            <Message text={message.text} sender={message.sentBy} avatar={avatarImg} date={message.sentAt}/>
            ))}
            <MessageInputForm></MessageInputForm>
        </div>
    );
}

export default MessagesContainer;