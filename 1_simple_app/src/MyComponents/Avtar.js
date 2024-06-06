import React from "react";

const avtar = 'https://i.imgur.com/7vQD0fPs.jpg';
const alt_text = 'Gregorio Y. Zara';
const name = "Gregorio Y. Zara";
const today = new Date();

function fromateDate(date){
    return new Intl.DateTimeFormat(
        'en-US',{weekday: 'long'}
    ).format(date);
}

export default function Avtar(){
    
    return(
        <>
           <h5>{name}'s To Do List</h5>
           <h6>Days name is := {fromateDate(today)}</h6>
           <img src={avtar}  alt={alt_text}  srcset=""  className="avtar round-circule "/>
        </>
    );
}