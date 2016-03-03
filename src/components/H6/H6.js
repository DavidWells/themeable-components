import propTypes from 'utils/element-propTypes'
import makeComponent from 'utils/generate-element'
import style from 'H6.css'

const H6 = ({customComponent, ...props}) => {
  const element = customComponent || 'h6'
  const componentProps = {...props}
  return makeComponent(element, componentProps, style)
}

H6.propTypes = propTypes

export default H6