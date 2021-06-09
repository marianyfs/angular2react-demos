import React from 'react'
import { react2angular } from 'react2angular'

export class Four extends React.Component {
  constructor (props) {
    super(props)
    this.state = { number: props.four }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      number: prevState.number + 1
    }))
  }

  render () {
    return (
      <div>
        <p>number: {this.state.number}</p>
        <button onClick={this.handleClick}> Plus </button>
      </div>
    )
  }
}

export let FourAngular = react2angular(Four, ['four'])
