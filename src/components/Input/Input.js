import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import InputPrimative from 'react-dom-primitives/Input/Input'
import makeComponent from '../../utils/generate-element'
import classNames from '../../utils/classNames'
import styles from 'Input.css'
import config from 'Input.config'

const name = 'Input'

class Input extends Component {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyPress: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.any
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    multiline: false,
    required: false,
    type: 'text'
  };

  constructor (props, context) {
    super(props, context)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value, event)
    }
  }

  blur () {
    ReactDOM.findDOMNode(this).blur()
  }

  focus () {
    ReactDOM.findDOMNode(this).focus()
  }

  render () {
    const { className, disabled, required, type, value, ...others} = this.props
    const localizedCSS = styles[`${name}`] || styles[`${name.toLowerCase()}`]

    const classes = classNames(
      name, /* Component name */
      localizedCSS, /* Localized className */
      className /* User specified classNames */
    )

    const props = {
      ...others,
      onChange: this.handleChange,
      ref: 'input',
      role: 'input',
      disabled: disabled,
      required: required,
      type: type,
      value: value,
      className: classes,
      'data-react-component': name
    }

    return makeComponent(InputPrimative, props, config)
  }
}


export default Input
