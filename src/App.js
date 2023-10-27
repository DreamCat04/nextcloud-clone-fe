import './App.css';
import ContactsDiv from './components/ContactsDiv';
import MessagesContainer from './components/Message';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div className="App">
      <ContactsDiv></ContactsDiv>
      <MessagesContainer></MessagesContainer>
    </div>
  );
}

export default App;