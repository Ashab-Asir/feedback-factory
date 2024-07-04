import { TriangleUpIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function FeedbackList() {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
           <TriangleUpIcon></TriangleUpIcon>
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Asir</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus laudantium ex sit quisquam reiciendis impedit eaque vitae recusandae vero.</p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  )
}
 