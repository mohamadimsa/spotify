import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Album extends Component{
   constructor(){
      super();
      this.state = {
         albums: []
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
      axios.get(`http://127.0.0.1:8000/api/albums`).then(res => {
         return this.setState({
            albums: res.data["hydra:member"]
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

   render() {
      return (
         <div>
            <h1>Album</h1>
            <div>{this.renderAlbum()}</div>
         </div>
      )
   }
}
export default Album;