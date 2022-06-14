import Link from 'next/link'
import { Container, Flex } from '@/styles/components'
import { SearchInput } from '@/ui-library'

import { Wrapper, Nav, NavMenu, NavMenuLink, Logo } from './Navbar.style'

export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <Flex gap='8.8rem'>
            <Link href='/' passHref>
              <Logo>Hekto</Logo>
            </Link>
            <NavMenu>
              <Link href='/' passHref>
                <NavMenuLink>Home</NavMenuLink>
              </Link>
              <Link href='/' passHref>
                <NavMenuLink>Pages</NavMenuLink>
              </Link>
              <Link href='/' passHref>
                <NavMenuLink>Products</NavMenuLink>
              </Link>
              <Link href='/' passHref>
                <NavMenuLink>Blog</NavMenuLink>
              </Link>
              <Link href='/' passHref>
                <NavMenuLink>Shop</NavMenuLink>
              </Link>
              <Link href='/' passHref>
                <NavMenuLink>Contact</NavMenuLink>
              </Link>
            </NavMenu>
          </Flex>
          <SearchInput />
        </Nav>
      </Container>
    </Wrapper>
  )
}
