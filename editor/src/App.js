import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Editor from './components/editor';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/editor" component={Editor} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
