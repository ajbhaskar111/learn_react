import React from "react";
import { sulptureList } from "./data";

export default function Gallery() {
    let index = 0;
    
    let sculpture = sulptureList[index];
    function nextslides (){
        index = index + 1;
    }

    return (
        <>
         <div className="container my-5">
            <button type="button" className="btn btn-primary mb-4" onClick={nextslides}>Next</button>
                <div className="card">
                    <div className="card-body">
                        
                        <h1>{sculpture.name}</h1>
                        <h4>{sculpture.artist}</h4>
                        <p>({index + 1} of {sulptureList.length})</p>

                        <img src={sculpture.url} alt={sculpture.alt} />

                        <p className="my-2">{sculpture.description}</p>
                    </div>
                </div>
            </div>

        </>
    );
}