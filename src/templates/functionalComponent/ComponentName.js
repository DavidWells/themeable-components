import React, { PropTypes } from 'react'
import generateClassNames from 'utils/new-create-classnames'
import makeComponent from 'utils/generate-element'
import Div from 'primatives/Div'
import styles from '{{name}}.css'
import config from '{{name}}.config'

const propTypes = {
  children: PropTypes.any
}

const {{name}} = ({children, className, customComponent, ...other}) => {
  const name = {{name}}
  const classes = generateClassNames(
    name, /* component name */
    styles.{{name}}, /* localized styles */
    className, /* user specified classNames */
  )

  const props = {
    ...other,
    children: children,
    className: classes,
    customComponent: customComponent,
    componentName: name
  }

  return makeComponent(Div, props, config)
}

{{name}}.propTypes = propTypes

export default {{name}}
