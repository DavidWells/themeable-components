import React, { Component, PropTypes } from 'react'
import makeComponent from 'utils/generate-element'
import composeClassName from '../../utils/create-classnames'
import style from 'Button.css'
import config from 'Button.config'

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.any,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func
  };

  handleMouseUp = (event) => {
    this.refs.button.blur()
    console.log('mouseup')
    if (this.props.onMouseUp) this.props.onMouseUp(event)
  };

  handleClick = (event) => {
    this.refs.button.blur()
    console.log('clicke')
    if (this.props.onClick) this.props.onClick(event)
  };

  handleMouseLeave = (event) => {
    this.refs.button.blur()
    console.log('mouseleabe')
    if (this.props.onMouseLeave) this.props.onMouseLeave(event)
  };

  render () {
    const { className, children, href, icon, inverse, label, ...others} = this.props
    const element = (href) ? 'a' : 'button'
    const propBasedClasses = {
      inverse: inverse
    }
    const classes = composeClassName(
      'button', /* component name */
      style, /* localized styles */
      className, /* user specified classNames */
      propBasedClasses /* prop based classnames */
    )

    const props = {
      ...others,
      href,
      ref: 'button',
      children: this.props.children,
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      onClick: this.handleClick,
      'data-react-component': 'button'
    }
    return makeComponent(
      element,
      props,
      style,
      config
    )
  }
}

export default Button
