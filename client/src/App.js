import React from 'react';
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom';

const googleView = async () => {
  try {
    const response = await axios.get('http://localhost:3895/auth/google')
    console.log(response)
  } catch (e) {
    console.log(e.message)
  }
}
const logoutView = async () => {
  try {
    const response = await axios.get('http://localhost:3895/auth/logout')
    console.log(response)
  } catch (e) {
    console.log(e.message)
  }
}

function App() {
  return (
    <div className="App">
      <h3>React app ready.</h3>
      <Link className="ui button" to="/auth/google">Continue with Google</Link>
      <Link className="ui button" to="/auth/logout">Log out</Link>
      <Switch>
        <Route path="/auth/google" render={() => {
          googleView()
        }}>

        </Route>
        <Route path="/auth/logout" render={() => {
          logoutView()
        }}>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
