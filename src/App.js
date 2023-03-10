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
import { useAuth } from './providers/authProvider';
import PrivateRoute from './providers/privateRoute';

function App() {
  const { user } = useAuth()
  return (
    <main>
      <Router>
        <div>
          { user && <Navbar /> }
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<PrivateRoute />} >
              <Route exact path="/" element={<Homepage />} />
              <Route path="/kanban" element={<TodoKanban />} />
              <Route path="/list" element={<TodoList />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/clientmanagement" element={<ClientManagement />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
