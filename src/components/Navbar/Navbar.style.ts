import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.black};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.5rem;
`

export const NavMenuLink = styled.a`
  transition: all 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`

export const Logo = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 3.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`
