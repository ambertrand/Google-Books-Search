import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';


function App() {
  return (
    <Router>
      <>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/">
            <Search />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
      </Switch>
      </>
    </Router>
  );
}

export default App;
