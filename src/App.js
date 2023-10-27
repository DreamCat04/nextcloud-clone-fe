import './App.css';
import ContactsDiv from './components/ContactsDiv';
import MessagesContainer from './components/Message';

function App() {
  return (
    <div className="App">
      <ContactsDiv></ContactsDiv>
      <MessagesContainer></MessagesContainer>
    </div>
  );
}

export default App;