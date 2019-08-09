import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from "./components/Home";
import Shop from "./components/Shop";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>カレー屋さんを探すアプリ</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:shopName/info" component={Shop} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
