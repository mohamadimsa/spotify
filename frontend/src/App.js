import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Album from './pages/album/Album';
import Homepage from './pages/Homepage';
import Genre from './pages/genre/Genre';


function App() {
    return ( <
        HashRouter >
        <
        div className = "container-fluid" >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Homepage }
        /> <
        Route exact path = "/album"
        component = { Album }
        /> <
        Route exact path = "/genre"
        component = { Genre }
        /> <
        /Switch> <
        /div> <
        /HashRouter>
    );
}
export default App;