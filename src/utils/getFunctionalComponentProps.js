function getFunctionalComponentParams(fn){
  var array = []
  var funStr = fn.toString()
  var check = funStr.match(/var\s(.*?)\s=\s_objectWithoutProperties/g)
  var test = funStr.match(/(_ref.[a-zA-Z]+)/g)

  array = (check) ? test.concat(check) : test

  return array
}
function stripProps(element, props){
  if(props[element]) {
    delete props[element]
  }
  return props
}