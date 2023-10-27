import Message from './Message'
import axios from 'axios';
import MessageBox from './MessageBox';

function MessagesContainer(){
    const [messages, setMessages] = useState([]);

    useEffect(() => {
    // Fetch messages and set the state here
    axios.get('/api/messages').then((response) => {
        setMessages(response.data);
        }).catch((error) => {
        console.error('Error fetching messages:', error);
        });
    }, []);

    return(
        <div className='messagesContainer'>
            {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender}/>
            ))}
            <MessageBox></MessageBox>
        </div>
    );
}

export default MessagesContainer;