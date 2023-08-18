import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
const handleUpperCase=()=>
{
let newtext=text.toUpperCase();
setText(newtext);

}
const handleLowerCase=()=>
{
let newtext=text.toLowerCase();
setText(newtext);

}
const handleOnChange=(event)=>
{

    setText(event.target.value);
}


    const [text,setText]= useState("Enter text")
  return (
   <> <div className="container">
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary mx-3" onClick={handleUpperCase}>Convert to uppercase</button>
  <button className="btn btn-primary" onClick={handleLowerCase}>Convert to lowercase</button>
    </div>

    <div className="container my-2">

<h1>Enter text summary</h1>
<p> {text.split(" ").length} words and {text.length} characters</p>


    </div>
    </>
  )
}
