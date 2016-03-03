import React from 'react'
import style from './Span.css'
import config from './Span.config'

const Span = ({customComponent, children, ...props}) => {
  const element = customComponent || 'span'
  return React.createElement(element, props, children)
}

export default Span
