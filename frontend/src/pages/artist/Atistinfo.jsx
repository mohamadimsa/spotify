import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
 class Atistinfo extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
           albums:[],
           artists: []
      }
        var get = props.location.search;
        var id_ar = this.extractParamsUrl(get).id;
      this.getArtist(id_ar);
      this.getAlbum(id_ar);
        
     }



  getAlbum(id){
       
    axios.get(`http://127.0.0.1:8000/api/albums?artistId=${id}`).then(res => {
       
       return this.setState({
         albums: res.data["hydra:member"]
         
       });
    });
 }

getArtist(id){
    axios.get(`http://127.0.0.1:8000/api/artists/${id}`).then(res => {
        
       return this.setState({
           
         artists: res.data
       });
    }).catch(err => {console.log(err)})
 }


 

    extractParamsUrl(chaineGET)
    {
        
        chaineGET = chaineGET.split('&');
        var result = {};
     
        chaineGET.forEach(function(el){
            var param = el.split('=');
            param[0] = param[0].replace('?', '');
            result[param[0]] = param[1];
        });
     
        return result;
    }

    renderArtist(){
       var info = this.state.artists
       console.log(info)
      return (

            <div className="info_artist row">
              <div className="col">
              <img className="image_artist" src={info.photo} alt="photo artist" />
              </div>
              <div className="col">
                 <p>nom : {info.name}</p>
                 <p>nom : {info.bio}</p>
              </div>
              <div className="row">
                 <p>{info.description}</p>
              </div>
            </div>
         )
   
   }

   renderAlbum(){
       
      return this.state.albums.map((album) => {
         return (
            <div key={album} className="list_album">
               <Link to={`/artist_info?id=${album.id}`}>
                  <h3>{album.name}</h3>
                  <img className="image_artist" src={album.cover} alt="cover album" />
               </Link>
            </div>
         )
      })
   }
    render() {
     
        return (
           
           <div className="pageArtist">
              <div>{this.renderArtist()}</div>
              <div>{this.renderAlbum()}</div>
           </div>
        )
     }
 }
 export default Atistinfo;