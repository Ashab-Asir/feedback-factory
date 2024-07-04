import React from 'react'
import Pattern from './Pattern'
import Logo from './Logo'
import PageHeading from './PageHeading'
import FeedbackForm from './FeedbackForm'

export default function Header() {
  return (
    <header>
    <Pattern></Pattern>
    <Logo></Logo>
    <PageHeading></PageHeading>
    <FeedbackForm></FeedbackForm>
    </header>
  )
}
