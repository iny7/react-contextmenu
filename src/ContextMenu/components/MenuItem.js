import React, { PureComponent } from 'react'

export default class MenuItem extends PureComponent {
  static propTypes = {

  }
  render () {
    const { children } = this.props
    return <li className="menu-item">{ children }</li>
  }
}
