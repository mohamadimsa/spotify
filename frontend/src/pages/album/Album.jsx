import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Album extends Component{
   constructor(){
      super();
      this.state = {
         albums: [],
         page: 1,
         nb_all: 0
      }
      this.getAlbums();
   }

   /*async getArtist(id){
      let nameArtist = await axios.get(`http://127.0.0.1:8000/api/artists/${id}`).then(res => {
         return res.data.name
      })
      
      return nameArtist
   }*/

   getAlbums(){
      axios.get(`http://127.0.0.1:8000/api/albums?page=${this.state.page}`).then(res => {
         return this.setState({
            albums: res.data["hydra:member"],
            nb_all: res.data["hydra:totalItems"]
         });
      });
   }

   renderAlbum(){
      return this.state.albums.map((album) => {
         return (
            <div key={album}>
               <Link to={`/album/${album.id}`}>
                  <h3>{album.name}</h3>
                  <img src={album.coverSmall} alt="img cover" />
               </Link>
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
            this.getAlbums();
         })
      }
   }

   prevPage(){
      if (this.state.page > 1){
         let nb_page = this.state.page - 1;
         this.setState({
            page: nb_page
         }, () => {
            this.getAlbums();
         })
      }
   }

   render() {
      return (
         <div>
            <h1>Album</h1>
            <p>Nombre d'albums trouvés: {this.state.nb_all}</p>
            <button onClick={this.prevPage.bind(this)}>Prev</button>
            <button onClick={this.nextPage.bind(this)}>Next</button>
            <div>{this.renderAlbum()}</div>
         </div>
      )
   }
}
export default Album;