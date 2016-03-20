import React from 'react'

const genericNode = function(tagName) {
  return ({children, customComponent, ...props}) => {
    console.log(arguments)
    //return dom('div', {...props}, children, customComponent)
    const element = customComponent || tagName
    return React.createElement(element, props, children)
  }
}

export default genericNode
