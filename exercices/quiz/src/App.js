import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home'
import Quizz from './pages/quizz'
import Leaderboard from './pages/leaderboard'

function App() {
  return (
    <Router>
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/quizzes/:id/leaderboard" component={Leaderboard}></Route>
          <Route path="/quizzes/:id" component={Quizz}></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
