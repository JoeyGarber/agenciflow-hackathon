import './App.css';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import { Route } from "react-router";

import Homepage from './components/homepage';
import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';
import TodoKanban from './components/kanban';
import TodoList from './components/todo';
import Chat from './components/chat'
import ClientManagement from './components/clientmanagement';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/kanban" element={<TodoKanban />} />
            <Route path="/list" element={<TodoList />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/clientmanagement" element={<ClientManagement />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
