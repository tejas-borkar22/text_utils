import React from 'react'

const About = () => {
  return (
    <div className="container my-3">
      <h3 className="my-2">About Text utils</h3>
      <p className="my-1">Text Utils is a word counter, character counter and a text utility app which you can use 
      to manipulate your text in the way you want. You can remove extra spaces from the text, convert text into title case or 
      sentence case easily and copy that text. It is a very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:
      </p>
      {/* Bootstrap Accordion */}
      <div className="accordion accordion-flush border p-2 my-4" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Lower Case
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.<br/>
            this is an example of lower case.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Upper Case
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
            To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.<br/>
            THIS IS AN EXAMPLE OF UPPER CASE.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Capitalized Case
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.
            Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.<br/>
            This Is An Example Of Capitalized Case.</div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default About
