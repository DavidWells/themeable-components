import propTypes from 'utils/element-propTypes'
import makeReactElement from 'utils/generate-element'
import style from 'P.css'

const P = ({children, customComponent, ...props}) => {
  const element = customComponent || 'p'
  return makeReactElement(element, {...props}, children, style)
}

P.propTypes = propTypes

export default P