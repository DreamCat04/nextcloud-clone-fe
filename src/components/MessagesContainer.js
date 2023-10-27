import Message from './Message'
const [messages, setMessages] = useState([]);
const addMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages([...messages, newMessage]);
    handleSendMessage();
};

function MessagesContainer(){
    return(
        <div>
            {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender}/>
            ))}
        </div>
    );
}

export default MessagesContainer;