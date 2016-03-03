import propTypes from 'utils/element-propTypes'
import makeComponent from 'utils/generate-element'
import style from 'H4.css'

const H4 = ({customComponent, ...props}) => {
  const element = customComponent || 'h4'
  const componentProps = {...props}
  return makeComponent(element, componentProps, style, null)
}

H4.propTypes = propTypes

export default H4