import propTypes from 'utils/element-propTypes'
import makeComponent from 'utils/generate-element'
import style from 'H3.css'

const H3 = ({customComponent, ...props}) => {
  const element = customComponent || 'h3'
  const componentProps = {...props}
  return makeComponent(element, componentProps, style, null)
}

H3.propTypes = propTypes

export default H3