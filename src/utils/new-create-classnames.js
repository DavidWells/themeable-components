import ClassNames from 'classnames'
import reset from '../css/reset.css'

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
