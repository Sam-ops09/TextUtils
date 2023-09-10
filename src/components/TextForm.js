import React, {useState} from 'react';
// import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    
    const capitalizeFirstLowercaseRest = (text) => {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
        props.showAlert("Capitalized the first character and the rest is lowercase", "success");
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleClearChange = () => {
        // console.log("On Change");
        let newText = ('')
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange= {handleOnChange} style = {{backgroundColor: props.mode === 'dark'?'#343a40':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" style = {{backgroundColor: props.mode === 'dark'?'#8d0c18':'#212529'}} onClick={handleUpClick}>Convert to UpperCase</button>            
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1"  style = {{backgroundColor: props.mode === 'dark'?'#8d0c18':'#212529'}} onClick={handleLowClick}>Convert to lowerCase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1"  style = {{backgroundColor: props.mode === 'dark'?'#8d0c18':'#212529'}} onClick={() => capitalizeFirstLowercaseRest(text)}>Capitalized Case</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1"  style = {{backgroundColor: props.mode === 'dark'?'#8d0c18':'#212529'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1"  style = {{backgroundColor: props.mode === 'dark'?'#8d0c18':'#212529'}} onClick={copyToClipboard}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-dark mx-1 my-1 my-1"  style = {{backgroundColor: props.mode === 'dark'?'#8d0c18':'#212529'}} onClick={handleClearChange}>Clear</button>
        </div>
        <div className="container my-3" style = {{color: props.mode === 'dark'?'white':'black'}}>
            <h2 className='mx-1 my-2'>Your text Summary</h2>
            <p className='mx-1 my-2'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p className='mx-1 my-2'>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2 className='mx-1 my-2'>Preview</h2>
            <p className='mx-1 my-2'>{text.length>0?text:"Nothing to preview"}</p> 
        </div>
        </>
    )
}