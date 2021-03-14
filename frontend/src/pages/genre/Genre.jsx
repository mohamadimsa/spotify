import React from "react";
import axios from "axios";
const Genre = (props) => {

axios
.get('http://127.0.0.1:8001/api/genres')
.then(response => {
console.log(response.data["hydra:member"]);
})
.catch(err => {console.log(err)})
return <h1>page genre</h1>
}



export default Genre;