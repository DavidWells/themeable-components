import React, { createElement } from 'react'
import composeClassName from './create-classnames'
import warning from 'utils/warning'

/**
 * Generate React Element from Tag. Wrapper for React.createElement
 * @param  {string} element  [description]
 * @param  {element} children  [description]
 * @param  {Object} style  [description]
 * @param  {Object} props  [description]
 * @return {reactElement}  [description]
 */

export default function makeComponent (element, props, style, config) {
  /* set name of element for className  */
  const name = element.name || element
  /* define original children */
  let children = props.children
  /* set className */
  const configClass = (config && config.props) ? config.props.className : null
  const classes = composeClassName(
    name, /* component name */
    style, /* localized styles */
    props.className, /* user specified classNames */
    configClass
  )
  /* set props */
  const properties = {
    ...props,
    className: classes,
    'data-react-component': name
  }

  if (props.config || config) {
    /* merge config file and config from props */
    const configuration = (props.config) ? mergeDeep(config, props.config) : config
    console.log(props);
    if(props.debug) {
      showConfigOnDebug(name, COMPONENT_CONFIG_PATH, JSON.stringify(configuration, null, '\t'))
    }

    if (configuration.innerWrapper) {
    /* wrap base children inside */
      children = createElement(
        configuration.innerWrapper.element,
        configuration.innerWrapper.props,
        props.children
      )
    }
    /* create base component */
    const component = createElement(element, properties, children)
    /* compose component out of configuration options */
    return composeElementWithConfig(component, configuration)

  } else {
    console.log('no config return base Component')
    /* default: return element created with React.createComponent */
    return createElement(element, properties, children)
  }
}

function composeElementWithConfig(component, c) {
  const { innerWrapper, outerWrapper, outerBefore, outerAfter } = c
  console.log('triggered')
  let composedComponent = component

  if (!Object.keys(c).length) {
    // exit early
  }

  /* if config innerWrapper, Wrap children */
  if (innerWrapper) {
    console.log('innerWrapper triggered')
  }

  /* if config outerWrapper, Wrap component */
  if (outerWrapper) {
    console.log('outerWrapper triggered')
    composedComponent = createElement(outerWrapper.element, outerWrapper.props, composedComponent)
  }

  let componentBefore
  if (outerBefore) {
    console.log('outerBefore triggered')
    componentBefore = createElement(outerBefore.element, outerBefore.props, outerBefore.children)
  }

  let componentAfter
  if (outerAfter) {
    console.log('outerAfter triggered')
    componentAfter = createElement(outerAfter.element, outerAfter.props, outerAfter.children)
  }

  if (outerBefore || outerAfter) {
    console.log('outerBefore ||  outerAfter triggered')
    composedComponent = createElement(
      'span', /* wrapper tagName */
      null, /* props */
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

function showConfigOnDebug(attributeName, configPath, config) {
  warning(
    false,
    `The "%s" is being overriden from "%s"
    using these configuration options:
    "%s"`,
    attributeName,
    configPath,
    config
  )
  return false
}

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
export function mergeDeep (target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    })
  }
  return target
}
