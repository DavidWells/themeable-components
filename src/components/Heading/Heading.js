import React, { PropTypes } from 'react'
import ContentEditable from 'react-contenteditable'
import * as Headings from './heading-list'
import generateClassNames from '../../utils/create-classnames'
import style from './Heading.css'

const headingSizes = [
  1, 2, 3, 4, 5, 6,
  '1', '2', '3', '4', '5', '6',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
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
  const headingType = (typeof size === 'number') ? `H${size}` : size.toUpperCase();
  const additional = {
    [`${headingType}-wrapper`]: true,
    [`${className}`]: className
  }
  console.log(headingType + ':headingType')
  console.log(headingType + ':children', children)
  const classes = generateClassNames('heading', style, additional)

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
    className: className
  }
  console.log('final:children', children)
  const renderHeading = React.createElement(Headings[`${headingType}`],
      props,
      children
  )

  return (
    <div {...other} className={classes}>
      {renderHeading}
    </div>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading
