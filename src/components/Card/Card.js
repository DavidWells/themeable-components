import React, { propTypes } from 'react'
import Div from 'dom/Div'
import generateClassNames from 'utils/create-classnames'
import style from 'Card.css'
import config from 'Card.config'

console.log(Div)

const Card = ({children, ...props}) => {
  const classes = generateClassNames('card', style)
  return (
    <Div {...props} className={classes}>
      {children}
    </Div>
  )
  // return composed Card
}

Card.propTypes = propTypes

export default Card
