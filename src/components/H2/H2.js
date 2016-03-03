import propTypes from 'utils/element-propTypes'
import makeComponent from 'utils/generate-element'
import style from 'H2.css'
import config from 'H2.config'

const H2 = ({customComponent, ...props}) => {
  const element = customComponent || 'h2'
  const componentProps = {...props}
  return makeComponent(element, componentProps, style, config)
}

H2.propTypes = propTypes

export default H2