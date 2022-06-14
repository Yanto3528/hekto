import styled from 'styled-components'

import { InputProps } from './Input.type'

export const Wrapper = styled.div<Pick<InputProps, 'height'>>`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  padding: 1rem;
  height: ${({ height }) => height};
  transition: all 0.4s;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.pink};
  }
`

export const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  font-family: 'Lato', sans-serif;
  background-color: transparent;
  font-size: inherit;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 500;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 500;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 500;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 500;
  }
`

export const ElementContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
