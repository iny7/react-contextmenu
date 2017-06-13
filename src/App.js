import React, { Component } from 'react'
import { ContextMenu, MenuItem, SubMenu } from './ContextMenu'

[
  {

  },
  {

  }
]

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      open: true
    }
  }

  handleToggleMenu = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state

    return (
      <div className="App" onClick={this.handleToggleMenu}>
        <ContextMenu open={open}>
          <MenuItem style={{ }}>
            <span>菜单项1</span>
            <i>箭头</i>

            <ContextMenu>
              <MenuItem>
                <span>子菜单项1</span>
                <i>箭头</i>
              </MenuItem>
              <MenuItem>
                <span>子菜单项1</span>
                <i>箭头</i>
              </MenuItem>
            </ContextMenu>

          </MenuItem>

          <MenuItem>
            <span>菜单项2</span>
            <i>箭头</i>
          </MenuItem>

          <MenuItem>
            <span>菜单项3</span>
            <i>箭头</i>
          </MenuItem>

        </ContextMenu>
      </div>
    )
  }
}
