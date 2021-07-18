import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Books, Meetings, Discussion, Signup, Contact } from "./components";

import './App.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Playfair+Display:wght@700&display=swap');
</style> 

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/books" exact component={() => <Books />} />
          <Route path="/meetings" exact component={() => <Meetings />} />
          <Route path="/discussion" exact component={() => <Discussion />} />
          <Route path="/signup" exact component={() => <Signup />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
     
      </Router>
    </div>
  );
}

export default App;
