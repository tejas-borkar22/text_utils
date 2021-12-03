import React,{useState} from 'react';
import './TextForm.css';
export default function TextForm(props) {
  const[text,setText] = useState("Enter your text here!!!")        //Initial Value

  const wordCounter = (string)=> ((text.trim().split(/\s+/)).filter(function (element) {return element !== "";})).length

  const handleOnChange = (event) =>{
    // console.log("On Change")
    setText(event.target.value)
  }
  const upCase = () =>{
    // console.log("Uppercase was clicked :" + text)
    let newText = text.toUpperCase()
    setText(newText)
  }
  const lowCase = () =>{
    // console.log("Lowercase was clicked :" + text)
    let newText = text.toLowerCase()
    setText(newText)
  }
  const clearBox = () =>{
    let newText = ""
    setText(newText)
  }
  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const copyText = () =>{
    navigator.clipboard.writeText(text)
    props.showAlertMsg("Text copied to clipboard !!!")
  }
  const toCapitalizedCase = () =>{ 
    let newText = text.replace(/\w\S*/g, function(t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); })
    setText(newText)
  }
  // const toSentenceCase = () =>{
  //   
  //   setText(newText)
  // }

  return (
    <>
    <main className="container textForm">
      <form className="my-3 mt-md-5">
        <h3 className="py-1 mb-2">{ props.heading }</h3>
        <div className="form-outline form-group mb-4">         
          <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="7"></textarea>
        </div>
        <button className="btn btn-md btn-outline-secondary" type="button" onClick={upCase} disabled={text.length === 0}>Uppercase</button>
        <button className="btn btn-md btn-outline-secondary" type="button" onClick={lowCase} disabled={text.length === 0}>Lowercase</button>
        <button className="btn btn-md btn-outline-secondary" type="button" onClick={removeExtraSpaces} disabled={text.length === 0}>Remove Extra Spaces</button>
        <button className="btn btn-md btn-outline-secondary" type="button" onClick={toCapitalizedCase} disabled={text.length === 0}>Capitalized Case</button>
        {/* <button className="btn btn-md btn-outline-secondary" type="button" onClick={toSentenceCase} disabled={text.length === 0}>Sentence Case</button> */}
        <button className="btn btn-md btn-outline-secondary" type="button" onClick={copyText} disabled={text.length === 0}>Copy Text</button>
        <button className="btn btn-md btn-outline-secondary" type="button" onClick={clearBox} disabled={text.length === 0}>Clear Text</button>
      </form>
      <section className="textStats">
        <h3>Your Text Summary</h3>
        <p>{wordCounter(text)} words , {text.length} characters and {(text.match(/\n/g) || '').length + 1} lines<br />
        {0.008 * wordCounter(text)} Minutes read</p>
      </section>
    </main>
    </>
  )
}














