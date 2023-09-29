import '../css/MessagesDiv.css'



function MessagesDiv(){
    return(
        <div className='messagesDiv'>
            <div id='messageHeader'>
                <img src='' alt=''></img>
                <p>Name of first contact</p>
            </div>
            <div id='messageBody'>
                <ul id='messages'>
                    <li class='message'>
                        <img src='test'></img>
                        <p>First message</p>
                    </li>
                    <li class='message'>
                        <img src='test'></img>
                        <p>Second message</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default MessagesDiv;