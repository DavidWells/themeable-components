import ClassNames from 'classnames'
import reset from '../css/reset.css'

/**
 interesting pattern packageName-ComponentName-className (pacomo)
 */

export default function composeClassName (componentName, ...other) {
  const styleGlobals = {
    /*  base CSS reset */
    [`${reset.component}`]: process.env.CSS_BASE_RESET
  }

  const genericClassName = {
    [`${componentName}-react-component`]: componentName,
  }

  const classes = ClassNames(
    ...other, // localized and user defined on classes
    genericClassName, // generic prefix
    styleGlobals, // global style settings
  )

  return classes
}


/* old
import ClassNames from 'classnames'
import reset from '../css/reset.css'

export default function composeClassName (componentName, localizedCSS, ...other) {

  const styleGlobals = {
    // global prefix
    [`${process.env.CSS_PREFIX}-${componentName}`]: process.env.CSS_PREFIX,
    //  global postfix
    [`${componentName}-${process.env.CSS_POSTFIX}`]: process.env.CSS_POSTFIX,
    //  base CSS reset
    [`${reset.component}`]: process.env.CSS_BASE_RESET
  }

  const classes = ClassNames(
    localizedCSS[componentName], // localized
    `${componentName}-react-component`, // generic prefix
    ...other, // user defined on class prop
    styleGlobals // global style settings
  )

  return classes
}
*/