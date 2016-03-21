import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import A from '../../primatives/A'
import _Button from '../../primatives/Button'
import { ButtonClass } from '../../primatives/Button'
import makeComponent from 'utils/generate-element'
import classNames from 'utils/classNames'
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

  constructor (props, context) {
    super(props, context)
    this.node = null
  }
  componentDidMount () {
    /* find node once */
    this.node = ReactDOM.findDOMNode(this)
  }

  handleMouseUp (event) {
    this.node.blur()
    if (this.props.onMouseUp) this.props.onMouseUp(event)
  }

  handleClick (event) {
    //this.refs.button.blur()
    this.node.blur()
    if (this.props.onClick) this.props.onClick(event)
  }

  handleMouseLeave (event){
    console.log(this.refs)
    //this.refs.button.blur()
    this.node.blur()
    if (this.props.onMouseLeave) this.props.onMouseLeave(event)
  }

  render () {
    const { className, children, href, icon, inverse, label, ...others} = this.props
    const element = (href) ? A : _Button
    // console.log(this.props)
    // console.log(ButtonTag)

    const propBasedClasses = {
      inverse: inverse
    }
    const classes = classNames(
      'button', /* component name */
      style.button, /* localized styles */
      className, /* user specified classNames */
      propBasedClasses /* prop based classnames */
    )

    const props = {
      ...others,
      href,
      //ref: 'button',
      children: children,
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp.bind(this),
      onMouseLeave: this.handleMouseLeave.bind(this),
      onClick: this.handleClick.bind(this),
      'data-react-component': 'button'
    }
    return makeComponent(
      element,
      props,
      config
    )
  }
}


export default Button
