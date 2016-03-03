import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import Button from '../src/components/Button'
import P from '../src/components/P'
import H2 from '../src/components/H2'
import H1 from '../src/components/H1'
import H5 from '../src/components/H5'
import Heading from '../src/components/Heading'
import Card from '../src/components/Card'
import TagList from '../src/tagList'
import style from './test.css'
import makeReactElement from 'utils/generate-element'


class Test extends React.Component {
  render() {
    console.log('this', this.props)
    return (
      <div {...this.props}>
        hehehe{this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      h1Clicked: false
    }
  }
  onTextChange (evt) {
    console.log('editable area value', evt.target.value)
  }
  handleClick() {
    this.setState({
      h1Clicked: !this.state.h1Clicked
    })
  }
  renderTags () {
     var test = {
       className: 'hdhdhdhd'
     }
     var children = 'hi'
     var commentNodes = TagList.map(function(tag, i) {
        return makeReactElement(tag, test, children, {})
     })
     return commentNodes;
  }
  render() {
    const arrayClass = ['one', 'two', 'three'];
    const objClass = {'obj': true, 'obj2': true, 'obj3': true};
    var test = (this.state.h1Clicked) ? Test : null
    var renderTags = null;
    return (
      <div>
          <Button debug inverse={true}>button</Button>
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu
          </Card>
      </div>
    )
  }
}

module.exports = App