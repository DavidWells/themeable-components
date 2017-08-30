import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import TestComponent from '../src/components/TestComponent/TestComponent'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import Heading from '../src/components/Heading'
import Card from '../src/components/Card'
import TagList from '../src/tagList'
import style from './test.css'
import makeReactElement from 'utils/generate-element'
import Span from 'react-dom-primitives/Span'
import Link from 'react-dom-primitives/A'


class Test extends React.Component {
  render () {
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
    this.onInputChange = this.onInputChange.bind(this)
  }
  componentDidMount() {
    console.log(this.refs.input)
    this.refs.input.focus()
  }
  onTextChange (evt) {
    console.log(evt)
    console.log('editable area value', evt.target.value)
  }
  onInputChange (val, evt) {
    console.log(val)
    console.log('editable area value', evt.target.value)
    this.setState({
      val: val
    })
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
        <Button>Button here</Button>
        <Input onChange={this.onInputChange} ref="input" value={this.state.val} />
      </div>
    )
  }
}

/*
<DOM.Div>
<div onClick={(e)=>{alert('chchch')}} className={true}>Prime Div
Testing div
</div>
  <ButtonClass>button</ButtonClass>
    <Table>
      <Tbody>
      <Tr>
        <Td>Jill</Td>
        <Td>SmiTh</Td>
        <Td>50</Td>
      </Tr>
      <Tr>
        <Td>Eve</Td>
        <Td>Jackson</Td>
        <Td>94</Td>
      </Tr>
      </Tbody>
    </Table>
    <TestComponent>hey</TestComponent>
    <A href="http://www.google.com">Tesxxxt</A>
    <Link>hehehehe</Link>
    <Button onClick={(e)=>{alert('button cicjed')}} ref="button">butoon clicker</Button>

    <Heading className="headinhhdh-one" size={1}>Heading 1</Heading>
    <Heading size="2">Heading 2</Heading>
    <H2>Heading 2 primative</H2>
    <Span>Testing span</Span>
    <H1>Test</H1>

    <Card customComponent={A} className="hhhsnby dhhdhd sjjs">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu
    </Card>

</DOM.Div>
 */

module.exports = App