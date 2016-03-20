import React, { PropTypes } from 'react'
import ContentEditable from 'react-contenteditable'
import Div from 'primatives/Div'
import * as Headings from './heading-list'
import makeComponent from 'utils/generate-element'
import generateClassNames from '../../utils/new-create-classnames'
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

const Heading = ({children, size, onChange, className, ...other}) => {
  const headingType = (!isNaN(size)) ? `H${size}` : size.toUpperCase()
  const HeadingElement = Headings[`${headingType}`]
  const additional = {
    [`${headingType}-wrapper`]: true,
  }

  const classes = generateClassNames(
    'heading', /* component name */
    styles.heading, /* localized styles */
    className, /* user specified classNames */
    additional
  )

  if (onChange) {
    /* if change handler allow content editable */
    children = (
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
    componentName: 'heading',
    className: classes,
    'data-react-component': 'Heading'
  }

  const renderer = (
    <Div {...props} className={classes}>
      <HeadingElement>
        {children}
      </HeadingElement>
    </Div>
  )

  return makeComponent(renderer, props, config)
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
