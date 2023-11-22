import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatList from './components/ChatList';
import IndividualChat from './components/IndividualChat';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/*<Route path="/chat/:personName" component={IndividualChat} />*/}
          <Route path="/" element={<MainPage/>} />
          {/*<Route path="/no-chat" exact render={() => <div>Select a chat</div>} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;