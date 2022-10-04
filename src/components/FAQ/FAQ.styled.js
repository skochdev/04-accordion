import styled from 'styled-components/macro';

export const Container = styled.article`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: ${(p) => p.theme.radii.normal};
  padding: ${(p) => p.theme.space[5]}px;
  background-color: white;

  h1 {
    flex: 1;
    margin-right: ${(p) => p.theme.space[5]}px;
    font-size: ${(p) => p.theme.fontSizes.xl};
  }

  ul {
    flex: 3;
  }

  li {
    display: flex;
    padding: ${(p) => p.theme.space[4]}px;
    border: ${(p) => p.theme.borders[1]};
    border-radius: ${(p) => p.theme.radii.normal};
    border-color: ${(p) => p.theme.colors.muted};
  }

  li + li {
    margin-top: ${(p) => p.theme.space[2]}px;
  }
`;
