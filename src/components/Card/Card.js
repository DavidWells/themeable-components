import React, { propTypes } from 'react'
import Div from 'primatives/Div'
import makeComponent from 'utils/generate-element'
import generateClassNames from 'utils/new-create-classnames'
import styles from 'Card.css'
import config from 'Card.config'

const Card = ({children, className, customComponent, ...other}) => {
  const name = 'card'
  const classes = generateClassNames(
    name, /* component name */
    styles.card, /* localized styles */
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

Card.propTypes = propTypes

export default Card
