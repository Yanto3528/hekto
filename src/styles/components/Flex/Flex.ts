import styled from 'styled-components';

import { FlexProps } from './Flex.type';

export const Flex = styled.div<Partial<FlexProps>>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
`;
