import React, { Component } from 'react'

class classClick extends Component {
  clickHandler() {
        console.log("class btton clicked")
  }
  render() {
    return (
      <button onClick={this.clickHandler}>click Me</button>
    )
  }
}

export default classClick