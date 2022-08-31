import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Main from './views/Main';
import Form from './views/Form';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="container w-80 shadow-lg p-4 mt-4">
    <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/new">
          <Form />
        </Route>
        <Route path="/edit/:id">
          <Update />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
