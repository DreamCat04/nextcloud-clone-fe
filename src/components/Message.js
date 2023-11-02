import '../css/Message.css'

function Message({ text, sender, avatar, date, isMyMessage }) {
  return (
    <div className={`message ${isMyMessage ? 'my-message' : 'opponent-message'}`}>
      <div className="message-avatar">
        <img src={avatar} alt={`${sender}'s avatar`} />
      </div>
      <div className="message-content">
        <div className="message-username">{sender}</div>
        <div className="message-text">{text}</div>
        <div className="message-date">{date}</div>
      </div>
    </div>
  );
}

export default Message;