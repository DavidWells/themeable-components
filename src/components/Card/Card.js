import React, { propTypes } from 'react'
import Div from 'primatives/Div'
import makeComponent from 'utils/generate-element'
import classNames from 'utils/classNames'
import styles from 'Card.css'
import config from 'Card.config'

const name = 'Card'
const Card = ({children, className, ...other}) => {
  const localizedCSS = styles[`${name}`] || styles[`${name.toLowerCase()}`]
  const classes = classNames(
    name, /* Component name */
    localizedCSS, /* Localized className */
    className /* User specified classNames */
  )
  /* build props */
  const props = {
    ...other,
    children,
    className: classes,
    'data-react-component': name
  }
  return makeComponent(Div, props, config)
}

Card.propTypes = propTypes

export default Card
