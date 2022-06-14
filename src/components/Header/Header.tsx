import React from 'react'

import { Container } from '@/styles/components'
import { StyledHeader, Wrapper, DetailWrapper, ActionWrapper } from './Header.style'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <DetailWrapper>
            <p>yanto.lee@yanto.com</p>
            <p>+62 856 6875 3528</p>
          </DetailWrapper>
          <ActionWrapper>
            <p>English</p>
            <p>USD</p>
            <p>Login</p>
            <p>Wishlist</p>
          </ActionWrapper>
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}
