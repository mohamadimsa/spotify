import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Artist extends Component{
   constructor(){
      super();
      this.state = {
         artists: []
      }
      this.getArtist();
   }

   /*async getArtist(id){
      let nameArtist = await axios.get(`http://127.0.0.1:8000/api/artists/${id}`).then(res => {
         return res.data.name
      })
      
      return nameArtist
   }*/

   getArtist(){
      axios.get(`http://127.0.0.1:8000/api/artists`).then(res => {
         return this.setState({
           artists: res.data["hydra:member"]
         });
      });
   }

   renderArtist(){
      return this.state.artists.map((artist) => {
         return (
            <div key={artist} className="info_artist">
               <Link to={`/artist?id=${artist.id}`}>
                  <h3>{artist.name}</h3>
                  <img className="image_artist" src={artist.photo} alt="photo artist" />
               </Link>
            </div>
         )
      })
   }

   render() {
      return (
         <div className="pageArtist">
            <h1>Liste des artiste disponibles dans la plateforme</h1> 
           
            <div>{this.renderArtist()}</div>
         </div>
      )
   }
}
export default Artist;

