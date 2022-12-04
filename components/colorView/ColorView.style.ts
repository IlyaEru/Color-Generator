import styled from 'styled-components';

export const StyledColorView = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};

  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &.colors__color--dark {
    color: ${({ theme }) => theme.colors.white};
  }
  .colors__color--copied {
    font-weight: 600;
    text-transform: uppercase;
  }
`;
