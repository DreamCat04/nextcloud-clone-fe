import '../css/Message.css'

function Message({id, text, sender}) {
    return (
      <div className={`message_${sender}`}>
        <p>{text}</p>
      </div>
    );
}

export default Message;