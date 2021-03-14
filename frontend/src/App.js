import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Album from './pages/album/Album';
import AlbumShow from './pages/album/AlbumShow';
import Homepage from './pages/Homepage';


function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
           <Switch>
             <Route exact path="/" component={Homepage}/>
             <Route exact path="/album" component={Album}/>
             <Route exact path="/album/:id" component={AlbumShow}/>
           </Switch>
      </div>
    </HashRouter>
  );
}
export default App;
