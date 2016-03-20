import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import TestComponent from '../src/components/TestComponent/TestComponent'
import Button from '../src/components/Button'
import P from '../src/primatives/P'
import H2 from '../src/primatives/H2'
import H1 from '../src/primatives/H1'
import Heading from '../src/components/Heading'
import Card from '../src/components/Card'
import TagList from '../src/tagList'
import style from './test.css'
import makeReactElement from 'utils/generate-element'
import Div from 'primatives/Div'
import Span from '../src/primatives/Span'
import ButtonTest from '../src/primatives/Button'
import { AClass as A } from '../src/primatives/A'
import Link from '../src/primatives/A'

import Table from '../src/primatives/Table'
import Tr from '../src/primatives/Tr'
import Td from '../src/primatives/Td'

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
      <Div>
          <Table>
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
          </Table>
          <TestComponent>hey</TestComponent>
          <A ref="yay" href="link">Tesxxxt</A>
          <Link>hehehehe</Link>
          <ButtonTest>butoon clicker</ButtonTest>
          <Div onClick={(e)=>{alert('chchch')}} className={true}>Testing div
          </Div>
          <Heading className="headinhhdh-one" size={1}>Heading 1</Heading>
          <Heading size="2">Heading 2</Heading>
          <H2>Heading 2 primative</H2>
          <Span>Testing span</Span>
          <H1>Test</H1>
          <Button inverse={true}>button</Button>
          <Card  className="hhhsnby dhhdhd sjjs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu
          </Card>

      </Div>
    )
  }
}

module.exports = App