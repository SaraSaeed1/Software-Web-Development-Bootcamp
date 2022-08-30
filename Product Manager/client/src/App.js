import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="container w-80 shadow-lg p-4 mt-4">
    <Switch>
        <Route path="/product/">
          <Main />
        </Route>
        <Route path="/edit/:id">
          <Update />
        </Route>
        <Route path="/show/:id">
          <Details />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;