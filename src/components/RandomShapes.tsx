import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import circle from "../images/intro/circle.svg"
import square from "../images/intro/square.svg"
import triangle from "../images/intro/triangle.svg"
import zigZag from "../images/intro/zig-zag.svg"
import line from "../images/intro/line.svg"

const Container = styled.div``

const Shape = styled.img`
  width: 24px;
  height: 24px;
  pointer-events: none;
  position: absolute;
  z-index: 0;

  ${({ position }) =>
    position &&
    css`
      left: ${position.x}px;
      top: ${position.y}px;
      transform: rotateZ(${position.rotate}deg);
    `}
`

function generatePositions() {
  return Array.from({ length: Math.floor(Math.random() * 5) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotate: Math.random() * 360
  }))
}

function RandomShapes({ children }) {
  const [circlePositions] = useState(generatePositions())
  const [squarePositions] = useState(generatePositions())
  const [trianglePositions] = useState(generatePositions())
  const [zigZagPositions] = useState(generatePositions())
  const [linePositions] = useState(generatePositions())

  return (
    <Container>
      {circlePositions.map((position, index) => (
        <Shape src={circle} position={position} key={index} />
      ))}
      {squarePositions.map((position, index) => (
        <Shape src={square} position={position} key={index} />
      ))}
      {trianglePositions.map((position, index) => (
        <Shape src={triangle} position={position} key={index} />
      ))}
      {zigZagPositions.map((position, index) => (
        <Shape src={zigZag} position={position} key={index} />
      ))}
      {linePositions.map((position, index) => (
        <Shape src={line} position={position} key={index} />
      ))}
      {children}
    </Container>
  )
}

RandomShapes.propTypes = {
  children: PropTypes.node.isRequired
}

export default RandomShapes
