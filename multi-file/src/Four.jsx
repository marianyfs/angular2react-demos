import React, { useState } from 'react'
import styled from 'styled-components'
import { react2angular } from 'react2angular'

const Button = styled.button`
  font-family: 'Verdana';

  background-color: red;

  border-radius: 4px;
  box-shadow: 4px;
  font-weight: 700;
  font-size: 24px;
  margin: 0px;

  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const Four = ({ four }) => {
  const [number, setNumber] = useState(four)
  return (
    <React.Fragment>
      <div>
        number: {number}
      </div>

      <Button onClick={() => setNumber(number + 1)}> Plus </Button>
    </ React.Fragment>
  )
}

export const FourAngular = react2angular(Four, ['four'])
