import styled from 'styled-components';
import { StyledContainer } from '../../styles/globalStyle';

export const StyledColorsContainer = styled(StyledContainer)`
  flex: 1;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  color: ${({ theme }) => theme.colors.primaryDarkBlue};
`;
