import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from './components/NavBar';
import Loading from './components/Loading';

import './App.css';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="App">
      

      <Switch>
        <Route path="/" component={NavBar} />
      </Switch>
    </div>
  );
}

export default App;
