import React, { PropTypes } from 'react'
import ContentEditable from 'react-contenteditable'
import Div from 'react-dom-primitives/Div'
import * as Headings from './headingTypes'
import makeComponent from 'utils/generate-element'
import classNames from 'utils/classNames'
import config from 'Heading.config'
import styles from './Heading.css'

const headingSizes = [
  1, 2, 3, 4, 5, 6,
  '1', '2', '3', '4', '5', '6',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6'
]
const propTypes = {
  children: PropTypes.any,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(headingSizes)
}
const defaultProps = {
  size: 1
}
const name = 'Heading'

const Heading = ({children, size, onChange, className, ...other}) => {
  let renderChildren = children
  const headingType = (!isNaN(size)) ? `H${size}` : size.toUpperCase()
  const HeadingElement = Headings[`${headingType}`]
  const localizedCSS = styles[`${name}`] || styles[`${name.toLowerCase()}`]

  const classes = classNames(
    name, /* Component name */
    localizedCSS, /* Localized className */
    className, /* User specified classNames */
    `${headingType}-wrapper`
  )

  if (onChange) {
    /* if change handler allow content editable */
    renderChildren = (
      <ContentEditable
        heading='span'
        html={children} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={onChange} // handle innerHTML change
       />
    )
  }

  const props = {
    ...other,
    className: classes,
    'data-react-component': name
  }

  const renderer = (
    <Div {...props} className={classes}>
      <HeadingElement>
        {renderChildren}
      </HeadingElement>
    </Div>
  )

  return makeComponent(renderer, props, config)
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
