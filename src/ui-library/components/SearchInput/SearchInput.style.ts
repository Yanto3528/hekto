import styled from 'styled-components'

export const IconContainer = styled.div`
  height: 4rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pink};
  transform: translateX(1.1rem);
  color: ${({ theme }) => theme.colors.white};
`
