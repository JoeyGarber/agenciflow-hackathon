import './App.css';
import { BrowserRouter as Router, Routes} from "react-router-dom";
import { Route } from "react-router";

import Homepage from './components/homepage';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
