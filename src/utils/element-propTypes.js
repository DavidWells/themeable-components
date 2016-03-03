import { PropTypes } from 'react'

/**
 * Default Prop Types for Base Elements
 * @type {Object}
 */
const propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  children: PropTypes.any,
  /* Custom element to override. Not advised for use except for special occasions  */
  customComponent: PropTypes.any
}

export default propTypes

