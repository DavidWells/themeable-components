import { createElement } from 'react'
import composeClassName from './create-classnames'

/**
 * Generate React Element from Tag. Wrapper for React.createElement
 * @param  {string} element  [description]
 * @param  {element} children  [description]
 * @param  {Object} style  [description]
 * @param  {Object} props  [description]
 * @return {reactElement}  [description]
 */

export default function makeReactElement (element, props, children, style = {}) {

  const isCustomElement = (typeof element === 'function')
  const name = (isCustomElement) ? element.name : element

  /* Custom element override used
  let replacedClass
  if (isCustomElement) {
    // Add original localized class to clone?
    replacedClass = Object.keys(style).map((key) => style[key])
  }
  */

  const classes = composeClassName(
    name, /* component name */
    style, /* localized styles */
    props.className /* user specified classNames */
  )

  const properties = {
    ...props,
    className: classes,
    'data-react-component': name
  }
  /* React.createElement */
  return createElement(element, properties, children)
}
