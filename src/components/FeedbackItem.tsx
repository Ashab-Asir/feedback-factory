import { TriangleUpIcon } from "@radix-ui/react-icons";

type feedbackItem={
  badgeLetter: string
  company:string
  daysAgo: number
  id:number
  text:string
  upvoteCount:number
}
export default function FeedbackItem({feedback}:feedbackItem) {
  return (
    <li className='feedback'>
        <button>
           <TriangleUpIcon></TriangleUpIcon>
          <span>{feedback.upvoteCount}</span>
        </button>
        <div>
          <p>{feedback.badgeLetter}</p>
        </div>
        <div>
          <p>{feedback.company}</p>
          <p>{feedback.text}</p>
        </div>
        <p>{feedback.daysAgo}d</p>
      </li>
  )
}
