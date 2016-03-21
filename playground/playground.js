import React, { PropTypes } from 'react'
import Navigation from './Navigation'
import TestComponent from '../src/components/TestComponent/TestComponent'
import Button from '../src/components/Button'
import Heading from '../src/components/Heading'
import Card from '../src/components/Card'
import TagList from '../src/tagList'
import style from './test.css'
import makeReactElement from 'utils/generate-element'
import Span from '../src/primatives/Span'

import Link from '../src/primatives/A'

import { Div, A, H1, H2, Table, Tbody, Tr, Td, P } from 'primatives'
// import { Div, A, H1, H2, Table, Tbody, Tr, Td, P } from 'ui-base/primatives'

// import Button from 'themeable/components/Button'

import * as DOM from 'primatives'

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
      <DOM.Div>
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
          <Div onClick={(e)=>{alert('chchch')}} className={true}>Testing div
          </Div>
          <Heading className="headinhhdh-one" size={1}>Heading 1</Heading>
          <Heading size="2">Heading 2</Heading>
          <H2>Heading 2 primative</H2>
          <Span>Testing span</Span>
          <H1>Test</H1>

          <Card customComponent={A} className="hhhsnby dhhdhd sjjs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mauris arcu
          </Card>

      </DOM.Div>
    )
  }
}

module.exports = App