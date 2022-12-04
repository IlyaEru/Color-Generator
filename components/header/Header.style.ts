import styled from 'styled-components';
import { StyledButton, StyledMainHeading } from '../../styles/globalStyle';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  margin: 0 auto;
  form {
    display: flex;

    input {
      padding: 0.5rem;
      font-size: 1rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      border: 2px solid ${({ theme }) => theme.colors.darkRed};
      &.form__valid-input {
        border: 2px solid ${({ theme }) => theme.colors.darkGreen};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    padding: 0.5rem 1rem;
    input {
      width: 12rem;
    }
  }
  @media (max-width: 400px) {
    input {
      width: 9rem;
    }
  }
`;
export const StyledHero = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xSmall}) {
    font-size: 1rem;
  }
`;

export const StyledSubmitButton = styled(StyledButton)`
  margin-left: 1rem;
`;
