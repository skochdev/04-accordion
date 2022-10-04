import styled from 'styled-components/macro';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;

  & > div {
    display: flex;
    flex-flow: column;
    width: 600px;
  }
`;

export const Question = styled.p`
  font-weight: ${(p) => p.theme.fontWeights[2]};
  margin-bottom: ${(p) => p.theme.space[5]}px;
  color: ${(p) => p.theme.colors.text};
`;

export const Answer = styled.p`
  color: ${(p) => p.theme.colors.muted};
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  right: 0.2rem;
  top: 0.1rem;
  margin-left: auto;
  border: none;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.57, 0.21, 0.69, 1.25);

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accent};
  }
`;
