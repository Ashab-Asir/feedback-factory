import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
export default function FeedbackList() {
  const [FeedbackItems,setFeedbackItems]=useState([]);
  useEffect(()=>{
    fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks").then(res=>{
      return res.json();
    }).then(data=>{
      setFeedbackItems(data.feedbacks);
    })
  },[])
  return (
    <ol className='feedback-list'>
      {FeedbackItems.map(feedback=>{
        return <FeedbackItem key={feedback.id} feedback={feedback}></FeedbackItem>
      })}
    </ol>
  )
}
 