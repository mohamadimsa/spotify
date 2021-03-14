import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Genre extends Component{
   constructor(){
      super();
      this.state = {
         genre: []
      }
      this.getGenre();
   }

  

   getGenre(){
      axios.get(`http://127.0.0.1:8000/api/genres`).then(res => {
         return this.setState({
            genre: res.data["hydra:member"]
         });
      });
   }

   renderGenre(){
      return this.state.genre.map((genres) => {
         return (
            <div >
               <Link to={`/genre/${genres.id}`}>
                  <h3>{genres.name}</h3>
               </Link>
            </div>
         )
      })
   }

   render() {
      return (
         <div>
            <h1>Genre</h1>
            <p>Voici la liste sur des genres</p>
            <div>{this.renderGenre()}</div>
         </div>
      )
   }
}
export default Genre;