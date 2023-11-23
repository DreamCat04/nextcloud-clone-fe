import '../css/Message.css'
import { useState, useEffect } from 'react';

function Message({ id, text, sender, avatar, date }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const handleEdit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: editedText }),
      });

      if (response.ok) {
        // Handle successful edit, update UI or state as needed
        setIsEditing(false);
      } else {
        // Handle error during edit
        console.error('Error editing message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Handle successful delete, update UI or state as needed
      } else {
        // Handle error during delete
        console.error('Error deleting message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  useEffect(() => {
    // Additional actions after editing or deleting, if needed
  }, [isEditing]);

  return (
    <div className={`message`}>
      <div className="user-avatar">
        <img src={avatar} alt={`${sender}'s avatar`} />
      </div>
      <div className="message-content">
        <div className="message-username">{sender}</div>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
          />
        ) : (
          <div className="message-text">{text}</div>
        )}
        <div className="message-date">{date}</div>
        <div className="message-actions">
        {isEditing ? (
          <>
            <button className='save-button' onClick={handleEdit}>Save</button>
            <button className='cancel-button' onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className='edit-button' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='delete-button' onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export default Message;