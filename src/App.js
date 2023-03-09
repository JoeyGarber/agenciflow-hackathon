import './App.css';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import { Route } from "react-router";

import Homepage from './components/homepage';
import SignIn from './components/auth/sign-in';
import SignUp from './components/auth/sign-up';
import TodoKanban from './components/kanban';
import TodoList from './components/todo';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      
    </div>
=======
    <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/kanban" element={<TodoKanban />} />
          <Route path="/list" element={<TodoList />} />
        </Routes>
      </Router>
    </main>
>>>>>>> 8b0912d951e4c85c50226dfbafdc6cd8fdbdea7c
  );
}

export default App;
