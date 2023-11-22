import MessagesContainer from "../components/MessagesContainer";
import ChatList from "../components/ChatList"
import '../App.css'

function MainPage(){
    return(
        <div>
            <ChatList></ChatList>
            <MessagesContainer></MessagesContainer>
        </div>
    );
}

export default MainPage;