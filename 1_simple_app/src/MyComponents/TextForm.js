import React, {useState} from "react"

export default function TextForm(props) {

    // text = "new text"; //wrong way to change the state
    // setText("Enter your New Text"); //Correct way to change the state
    const changeUptext = () => {
          //    setText("The value is")
        //   console.log("Text change the uppcae"+ text );
          let newText = text.toUpperCase();
          setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
      
        <section>
            <div className="container">
                <div className="mb-3">
                    <h3>{props.title}</h3>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your detail</label>
                        <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" onChange={handleOnChange} value={text}></textarea>
                        <button type="submit" className="btn btn-primary" onClick={changeUptext}>Change Font Type</button>
                </div>
            </div>
        </section> 
       
    )
}