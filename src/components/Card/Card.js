import React, { propTypes } from 'react'
import Div from 'primatives/Div'
import makeComponent from 'utils/generate-element'
import classNames from 'utils/classNames'
import styles from 'Card.css'
import config from 'Card.config'

const name = 'Card'
const Card = ({children, className, ...other}) => {
  /* generate classNames */
  const classes = classNames(
    name, /* component name */
    styles[`${name}`] || styles[`${name.toLowerCase()}`], /* localized styles */
    className /* user specified classNames */
  )
  /* build props */
  const props = {
    ...other,
    children,
    className: classes,
    componentName: name
  }
  return makeComponent(Div, props, config)
}

Card.propTypes = propTypes

export default Card
