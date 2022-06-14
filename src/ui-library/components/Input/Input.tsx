import React from 'react'

import { Wrapper, StyledInput, ElementContainer } from './Input.style'
import { InputProps } from './Input.type'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ leftElement, rightElement, height, ...props }, ref) => {
    return (
      <Wrapper height={height}>
        <ElementContainer>{leftElement}</ElementContainer>
        <StyledInput ref={ref} {...props} />
        <ElementContainer>{rightElement}</ElementContainer>
      </Wrapper>
    )
  }
)

Input.displayName = 'Input'
