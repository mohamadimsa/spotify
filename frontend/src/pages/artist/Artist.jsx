import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Artist extends Component{
   constructor(){
      super();
      this.state = {
         artists: [],
         page: 1,
         nb_all: 0
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
      axios.get(`http://127.0.0.1:8000/api/artists?page=${this.state.page}`).then(res => {
         return this.setState({
           artists: res.data["hydra:member"],
           nb_all: res.data["hydra:totalItems"]
         });
      });
   }

   renderArtist(){
       
      return this.state.artists.map((artist) => {
         return (
            <div key={artist} className="info_artist">
               <Link to={`/artist_info?id=${artist.id}`}>
                  <h3>{artist.name}</h3>
                  <img className="image_artist" src={artist.photo} alt="photo artist" />
               </Link>
               <p>{artist.description}</p>
            </div>
         )
      })
   }

   nextPage(){
      if (this.state.page < Math.ceil(this.state.nb_all / 15)){
         let nb_page = this.state.page + 1;
         this.setState({
            page: nb_page
         }, () => {
            this.getArtist();
         })
      }
   }

   prevPage(){
      if (this.state.page > 1){
         let nb_page = this.state.page - 1;
         this.setState({
            page: nb_page
         }, () => {
            this.getArtist();
         })
      }
   }

   render() {
     
      return (
         <div className="pageArtist">
            <h1>Liste des artiste disponibles dans la plateforme</h1> 
            <p>Nombre d'artistes trouvés: {this.state.nb_all}</p>
            <button onClick={this.prevPage.bind(this)}>Prev</button>
            <button onClick={this.nextPage.bind(this)}>Next</button>
            <div>{this.renderArtist()}</div>
         </div>
      )
   }
}
export default Artist;

