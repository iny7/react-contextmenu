import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

const getStyle = (isOpen) => {
  return {
    defaultStyle: {
      scale: isOpen ? 1 : 0.8,
      opacity: isOpen ? 1: 0
    },
    dstStyle: {
      scale: isOpen ? spring(1) : spring(0.8),
      opacity: isOpen ? spring(1) : spring(0),
    }
  }
}

export default class ContextMenu extends Component {
  render () {
    const { children, isOpen, left, top } = this.props
    const { defaultStyle, dstStyle } = getStyle(isOpen)

    return (
      <Motion defaultStyle={defaultStyle} style={dstStyle}>
        {
          ({ scale, opacity }) => {
            const style = {
              transform: `scale(${scale})`,
              opacity: opacity,
              left,
              top
            }
            return <ul className="mb-contextmenu" style={style}>{ children }</ul>
          }
        }
      </Motion>
    )
  }
}
ContextMenu.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
}
