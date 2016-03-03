import propTypes from 'utils/element-propTypes'
import makeComponent from 'utils/generate-element'
import style from 'H1.css'
import config from 'H1.config'

const H1 = ({customComponent, ...props}) => {
  const element = customComponent || 'h1'
  const componentProps = {...props}
  return makeComponent(element, componentProps, style, config)
}

H1.propTypes = propTypes

export default H1
