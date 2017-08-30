import React, { createElement } from 'react'
import mergeDeep from './merge-deep'
import ClassNames from 'classnames'
import warning from './warning'
import Span from 'react-dom-primitives/Span'
/**
 * Generate React Element from Tag. Wrapper for React.createElement
 * @param  {string} element  [description]
 * @param  {element} children  [description]
 * @param  {Object} style  [description]
 * @param  {Object} props  [description]
 * @return {reactElement}  [description]
 */

export default function makeComponent (element, props, config) {
  /* set name of element for className  */
  let name = (typeof element === 'string') ? element : null
  if (props['data-react-component']) {
    name = props['data-react-component']
  }
  /* define original children */
  let children = props.children
  /* set className */
  const configClass = (config && config.props) ? config.props.className : null

  const classes = ClassNames(
    props.className, /* user specified classNames */
    configClass
  )
  /* set props */
  let properties = {
    ...props,
    className: classes,
    'data-react-component': name
  }

  if (props.config || config) {
    /* merge config file and config from props */
    const configuration = (props.config) ? mergeDeep(config, props.config) : config
    // console.log(props);

    if (configuration.props) {
      /* TODO figure out the best way to handle these props and show debug meessages */
      properties = {...configuration.props, ...properties}
    }

    if (props.debug) {
      var debugName = props['data-react-component'] || element.name || element

      showConfigOnDebug(debugName, COMPONENT_CONFIG_PATH, JSON.stringify(configuration, null, '\t'))
    }

    if (configuration.innerWrapper) {
    /* wrap base children inside */
      children = createElement(
        configuration.innerWrapper.element,
        configuration.innerWrapper.props,
        props.children
      )
    }

    /* check if react JSX */
    if (typeof element === 'object') {
      children = element.props.children
      element = element.type
    }

    /* create base component */
    const component = createElement(element, properties, children)
    /* compose component out of configuration options */
    return composeElementWithConfig(component, configuration)
  } else {
    console.log('no config return base Component')
    /* default: return element created with React.createComponent */
    /* check if react JSX */
    if (typeof element === 'object') {
      children = element.props.children
      element = element.type
    }
    return createElement(element, properties, children)
  }
}

function composeElementWithConfig (component, c) {
  const { innerWrapper, outerWrapper, outerBefore, outerAfter } = c
  console.log('compose from config triggered', component)
  let composedComponent = component

  if (!Object.keys(c).length) {
    // exit early
  }

  /* if config innerWrapper, Wrap children */
  if (innerWrapper) {
    // console.log('innerWrapper triggered')
  }

  /* if config outerWrapper, Wrap component */
  if (outerWrapper) {
    // console.log('outerWrapper triggered')
    // console.log('outerWrapper.element', outerWrapper.element)
    // map plaintext primative to component primative
    // TODO
    // var test = (outerWrapper.element === 'div') ? Div : outerWrapper.element
    composedComponent = createElement(outerWrapper.element, outerWrapper.props, composedComponent)
  }

  let componentBefore
  if (outerBefore) {
    // console.log('outerBefore triggered')
    componentBefore = createElement(outerBefore.element, outerBefore.props, outerBefore.children)
  }

  let componentAfter
  if (outerAfter) {
    // console.log('outerAfter triggered')
    componentAfter = createElement(outerAfter.element, outerAfter.props, outerAfter.children)
  }

  if (outerBefore || outerAfter) {
    // console.log('outerBefore ||  outerAfter triggered')
    composedComponent = createElement(
      Span, /* wrapper tagName */
      { 'data-outer-wrapper-compontent': 'Span' }, /* props */
      componentBefore,
      composedComponent,
      componentAfter
    )
  }

  return composedComponent
}

/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
export function isObject (item) {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null)
}

function showConfigOnDebug (attributeName, configPath, config) {
  console.log('WARNING TRIGGERED')
  warning(
    false,
    `The '%s' is being overriden from '%s'
    using these configuration options:
    '%s'`,
    attributeName,
    configPath,
    config
  )
  return false
}
