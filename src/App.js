import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Login from './Components/Login/Login';
import Pokemons from './Components/Pokemons/Pokemons'
import PokemonsDetails from './Components/PokemonsDetail/PokemonsDetails'

import PrivateRoute from './Helpers/PrivateRoute'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>

        <PrivateRoute exact path='/pokemons'>
          <Pokemons />
        </PrivateRoute>
        <PrivateRoute exact path='/pokemons/:name'>
          <PokemonsDetails />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
