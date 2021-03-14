import React from "react";
import axios from 'axios';


class Artist extends React.Component {
   

   showArtist() {
      axios
      .get('http://127.0.0.1:8000/api/artists')
      .then( response =>  {
       return {response};
      })
      .catch(err => {console.log("salut")})
   }

    

   render() {
       console.log(this.showArtist())

      return (
         <div className="pageArtist">
            <h3>page artist</h3>
         </div>
      )
   }

}
export default Artist;

