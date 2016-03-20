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
  customComponent: PropTypes.any,
  // customProp: function(props, propName, componentName) {
  //    if (!/matchme/.test(props[propName])) {
  //      return new Error('Validation failed!' + componentName);
  //    }
  // }
}

export default propTypes

