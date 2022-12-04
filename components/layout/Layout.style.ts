import styled from 'styled-components';
import { StyledContainer } from '../../styles/globalStyle';

export const StyledLayout = styled(StyledContainer)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  padding: 0;
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
