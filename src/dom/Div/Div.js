import React from 'react'
import style from './Div.css'
import config from './Div.config'

const Div = ({customComponent, children, ...props}) => {
  const element = customComponent || 'div'
  return React.createElement(element, props, children)
}

export default Div
