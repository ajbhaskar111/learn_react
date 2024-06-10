import React from "react";

function Cup({guest}){
    return <h2>Tea cup for gues #{guest}</h2>;
}

export default function ComponentPure(){
   let cups =[];
   for (let i = 1; i <= 12; i++){
    cups.push(<Cup key={i} guest={i} />);
   }
    return cups;
         
  
}