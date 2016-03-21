import React, { Component, PropTypes } from 'react'
//import Button from '../Button/Button'

class TestComponent extends Component {
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
    console.log('REFS', this.refs.buttontest)
    //this.refs.buttontest.node.style.color = 'purple'
  }
  render () {
    return (
      <div>
        <div ref="buttontest">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default TestComponent
