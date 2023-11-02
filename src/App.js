import './App.css';
import ContactsDiv from './components/ContactsDiv';
import MessagesContainer from './components/MessagesContainer';

function App() {
  return (
    <div className="App">
      <ContactsDiv></ContactsDiv>
      <MessagesContainer></MessagesContainer>
    </div>
  );
}

export default App;