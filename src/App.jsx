import { Box } from 'components/Box';
import { GlobalStyle } from './theme/GlobalStyle';
import FAQ from './components/FAQ/FAQ';
import data from './data';

function App() {
  return (
    <Box as='main'>
      <GlobalStyle />
      <Box
        as='section'
        display='flex'>
        <FAQ data={data} />
      </Box>
    </Box>
  );
}

export { App };
