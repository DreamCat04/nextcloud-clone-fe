const handleSendMessage = (message) => {
    sendMessageToAPI(message);
};

function MessageBox(){
    return (
        <div className="messageBox">
            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => handleSendMessage(message)}>Send</button>
        </div>
    );
}

export default MessageBox;