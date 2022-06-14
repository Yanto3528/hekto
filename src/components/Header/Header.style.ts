import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.4rem;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4.8rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
