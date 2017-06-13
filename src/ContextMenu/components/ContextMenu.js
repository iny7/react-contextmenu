import React, { Component } from 'react'

export default class ContextMenu extends Component {
  render () {
    const { children } = this.props
    return (
      <ul className="mb-contextmenu">{ children }</ul>
    )
  }
}
