import React, { Component } from "react";

 class Atistinfo extends React.Component{

    constructor(props)
    {
        super(props);
 
        var get = props.location.search;
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

    render() {
        return (
           <div className="pageArtist">
              <h1>salut</h1> 
           </div>
        )
     }
 }
 export default Atistinfo;