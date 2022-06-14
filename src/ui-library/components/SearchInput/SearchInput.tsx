import React from 'react'
import { Search } from 'react-feather'

import { Input } from '../Input'
import { IconContainer } from './SearchInput.style'

export const SearchInput = () => {
  return (
    <Input
      rightElement={
        <IconContainer>
          <Search size='2.4rem' />
        </IconContainer>
      }
      placeholder='Search product...'
      height='4rem'
    />
  )
}
