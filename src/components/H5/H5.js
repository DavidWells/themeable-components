import propTypes from 'utils/element-propTypes'
import makeComponent from 'utils/generate-element'
import style from 'H5.css'

const H5 = ({customComponent, ...props}) => {
  const element = customComponent || 'h5'
  const componentProps = {...props}
  return makeComponent(element, componentProps, style, null)
}

H5.propTypes = propTypes

export default H5