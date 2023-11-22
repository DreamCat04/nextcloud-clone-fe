import ContactsDiv from "../components/ContactsDiv";
import MessagesContainer from "../components/MessagesContainer";
import '../css/MainPage.css';

function MainPage(){
    return(
        <div className="mainPage">
            <ContactsDiv></ContactsDiv>
            <MessagesContainer></MessagesContainer>
        </div>
    );
}

export default MainPage;