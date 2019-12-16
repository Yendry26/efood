import React, {useEffect} from "react";

export default function  Headline ({ headline, onChangeHeadline }){
    console.log(`From headline ${headline}`);
     useEffect(() => {
       fetch("https://10.211.55.3:45455/api/content/GetUsuario")
      .then(res => res.json())
      .then(data => {
        
        console.log(data, headline);
        }
      )});
    

    return(
        <div>
          <h1>{headline}</h1>
          <input type="text" value={headline} onChange={onChangeHeadline} />
        </div>
      );
}