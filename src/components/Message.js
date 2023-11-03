import '../css/Message.css'

function Message({ text, sender, avatar, date }) {
  return (
    <div className={`message`}>
      <div className="user-avatar">
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