import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Album from './components/album/Album';
import Homepage from './components/Homepage';


function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
           <Switch>
             <Route exact path="/" component={Homepage}/>
             <Route exact path="/album" component={Album}/>
           </Switch>
      </div>
    </HashRouter>
  );
}
export default App;
