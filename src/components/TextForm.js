import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick=()=>{
        //console.log('Handle on Click' + text);
        if(text!=''){
            let newtext = text.toUpperCase()    ;
            setText(newtext );
            props.showAlert('Text is converted to Upper case','success ')
        }
    }

    const handleLlowerClick=()=>{
        //console.log('Handle on Click' + text);
        let newtext = text.toLocaleLowerCase();
        setText(newtext );
        props.showAlert('Text is converted to Lower case','success ')
    }

    const handlePretifyClick=()=>{
        //console.log('Handle on Click' + text);
        // let newtext = text.replace("}",/\r/+'} ');
        let newtext = text.replace("}",/\r\n/);
        setText(newtext);
        props.showAlert('Text is pretified','success ')
    }

    const handleMinifyClick=()=>{
        //console.log('Handle on Click' + text);
        let newtext = text.replace(/\n/g, "").replace(/\n/g, "");
        setText(newtext );
        props.showAlert('Text is minified','success ')
    }

    const handleOnChange=(event)=>{
        //console.log('Handle on Change');
        setText(event.target.value);
    }

    const handleClear=()=>{
        //console.log('Handle on Click' + text);
        let newtext = '';
        setText(newtext );
        props.showAlert('Text is cleared ','danger ')
    }
    const handleRedundancy = ()=> { 
        let set1 = new Set(text.split(" "));          
        let newText = Array.from(set1).join(" ");
        setText(newText);
        props.showAlert('Duplication is removed from your text','success ')
   }


    return (
        <>
        <div className={`container my-3 bg-${props.mode==='dark'?'light':'light'}`}>
            <div className="mb-3">
                <label htmlFor="myBox" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</label>
                <textarea placeholder ="Enter text here.." onChange={handleOnChange} className="form-control" id="myBox" rows="8" value={text}></textarea>
            </div>
            <button className="btn btn-outline-success" onClick={handleUpClick}>Convter to Uppercase</button>
            <button className="btn btn-outline-success mx-2" onClick={handleLlowerClick}>Convter to LowerCase</button>
            <button className="btn btn-outline-success mx-2" onClick={handleMinifyClick}>Minify CSS</button>
            <button className="btn btn-outline-success mx-2" onClick={handleRedundancy}>Remove Duplication</button>
            <button className="btn btn-outline-success mx-2" onClick={handleRedundancy}>Remove Extra Spaces</button>
            <button className="btn btn-outline-success mx-2" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container my-3">
        <h1 className="">Your text Summary</h1>
        <p className="">{text.split(" ").length} words and {text.length} characters</p>
        <p className="">{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}