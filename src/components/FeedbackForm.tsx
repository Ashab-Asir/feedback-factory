import { useState } from "react"
import { MAX_CHARACTER } from "../lib/constants"
export default function FeedbackForm() {
  const [text,setText]=useState("");
  const charCount=MAX_CHARACTER-text.length;
  return (
    <form className='form'>
      <textarea  placeholder="asir" spellCheck={false} 
      id='feedback-textarea' onChange={(e)=>{
        const newText=e.target.value; 
        if(newText.length>MAX_CHARACTER){
          return ;
        }
        setText(newText);
      }}></textarea>
      <label htmlFor="feedback-textarea">Enter your feedback here, remember to #hashtag the company</label>
      <div>
        <p className='u-italic'>{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  )
}
