import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Album from './pages/album/Album';
import Homepage from './pages/Homepage';
import Artist from './pages/artist/Artist';
import Atistinfo from './pages/artist/Atistinfo';


function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
           <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/album" component={Album}/>
            <Route exact path="/artist" component={Artist}/>
            <Route  path="/artist_info" component={Atistinfo}/>
           </Switch>
      </div>
    </HashRouter>
  );
}
export default App;