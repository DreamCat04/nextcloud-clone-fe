async function sendMessageToAPI(message){
    try {
    const response = await axios.post('/api/messages', {
      message: message,
    });
    console.log('Message sent successfully:', response.data);
    // Handle success, update the UI, etc.
  } catch (error) {
    console.error('Error sending message:', error);
    // Handle errors, show an error message, etc.
  }
}

function MessageBox(){
    return (
        <div className="messageBox">
            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => sendMessageToAPI(message)}>Send</button>
        </div>
    );
}

export default MessageBox;