import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoApp from './component/TodoApp';
import Navbar from './component/navbar/Navbar';
import SignUp from './component/auth/SignUp'
import SignIn from './component/auth/SignIn'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/login' component={SignIn}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/' component={TodoApp}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
