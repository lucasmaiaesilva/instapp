import React from 'react'
import Message from '../Message'

const RenderContent = props => {
  const text = `We are searching for: ${props.searchFor}`
  return (
    props.data.length > 0 ? 
      <Message text={text} /> :
      <Message text="Empty result" />
  )
}

const Content = props => {
  return (
    <section className="content">
      
      {RenderContent(props)}
    </section>
  )
}
export default Content
