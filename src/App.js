import './App.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counters from './component/counters'
import Detail from './component/detail'
import Else from './component/else'

function rootRender(){
  ReactDOM.render(<Counters />, document.getElementById("root"));
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">  
            <header className="App-header">
              <Link to="/home/counters">Counters</Link>
              <Link to="/home/jin">Jin</Link>
              <Link to="/else">to else</Link>
            </header>
            <div>
                <Switch>
                  <Route path="/home/counters">
                    <Counters />
                  </Route>
                  <Route path="/home/jin">
                    <Detail />
                  </Route>
                </Switch>
            </div>
          </Route>
          <Route path="/else">
            <Else />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
