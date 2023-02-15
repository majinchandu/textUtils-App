import React,{useState} from 'react' //using UseState Hooks 

function Formtext(props) {
  const [text, setText] = useState("enter your text here");
  const HandleUpClick = () =>{
    // console.log("uppercase was clicked")
    setText(text.toUpperCase()) //convert the text inside the text area to uppercase
    props.showAlert("converted to uppercase","success")
  }

  const HandleLowClick = () =>{
    // console.log("uppercase was clicked")
    setText(text.toLowerCase()) //convert the text inside the text area to uppercase
    props.showAlert("converted to lowercase","success")
  }

  const HandleOnChange = (event) =>{
    // console.log("on change")
    setText(event.target.value)
  }
  const Copy = () => {
    // Get the text field
    var copyText = document.getElementById("mybox");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    props.showAlert("copied to clipboard","success")
  }
  return (
    <>
      <div  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
          <div className="mb-3">  {/*bootstrap class for textarea*/ }
            {/* <label for="mybox" class="form-label"></label> */}
              <textarea className="form-control" id="mybox" value={text} onChange={HandleOnChange} rows="8" style={{backgroundColor:props.mode==='dark'?'lightgray':'white'}}></textarea>
              {/* style me double bracket aaya hai  */}
          </div>
          <button className = 'btn btn-primary mx-1' onClick={HandleUpClick}>convert to uppercase</button>
          <button className = 'btn btn-secondary mx-1' onClick={HandleLowClick}>convert to lowercase</button>
          <button className='btn btn-danger' onClick={Copy}>Copy</button>
      </div>
      <div  style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>Your Text Summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        {/* .split() inbuilt function Split a string into substrings using the specified separator and return them as an array. */}
        <p>{0.008 * text.split(" ").length}Minutes read </p>
      </div>
    </>
  )
}

export default Formtext