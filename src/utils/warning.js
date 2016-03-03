import emptyFunction from './emptyFunction'

var warning = emptyFunction;

if (__DEV__) {
  warning = function(condition, format, ...args) {
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, () => args[argIndex++]);
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

export default warning

/**
 Usage

 import warning from 'utils/warning'
 warning(
       false,
       'Textarea elements must be either controlled or uncontrolled ' +
       '(specify either the value prop, or the defaultValue prop, but not ' +
       'both). Decide between using a controlled or uncontrolled textarea ' +
       'and remove one of these props. More info: ' +
       'https://fb.me/react-controlled-components'
     );

 function isAttributeNameSafe(attributeName) {
   warning(
     false,
     'Invalid attribute name: `%s`',
     attributeName
   );
   return false;
 }
 */