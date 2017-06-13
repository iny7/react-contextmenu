import React, { Component } from 'react'
import { ContextMenu, MenuItem } from './ContextMenu'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: true
    }
  }
  handleClick = () => {
    this.setState({ isOpen: false })
  }
  handleToggleMenu = (e) => {
    e.preventDefault()
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    } else {
      this.setState({
        isOpen: true,
        left: e.pageX,
        top: e.pageY
      })
    }
  }

  render() {
    const { isOpen, left, top } = this.state

    return (
      <div className="App" onClick={this.handleClick} onContextMenu={this.handleToggleMenu}>
        <ContextMenu isOpen={isOpen} left={left} top={top}>
          <MenuItem style={{ }}>
            <span>MenuItem1</span>
            <i>arrow</i>

            <ContextMenu>
              <MenuItem>
                <span>MenuItem</span>
                <i>arrow</i>
              </MenuItem>
              <MenuItem>
                <span>MenuItem</span>
                <i>arrow</i>
              </MenuItem>
            </ContextMenu>

          </MenuItem>

        {/*
          <MenuItem>
            <span>MenuItem</span>
            <i>arrow</i>
          </MenuItem>

          <MenuItem>
            <span>MenuItem</span>
            <i>arrow</i>
          </MenuItem>
        */}

        </ContextMenu>
      </div>
    )
  }
}
