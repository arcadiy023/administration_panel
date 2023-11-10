import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Text, Button , Box} from './components';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <Box defFlex="true" ai="true" row="false">
          <Button>OK</Button>
      </Box>
<Box defFlex="true" >
      <Button disabled >
    <Text caption="Потвердить"/>
      </Button>
</Box>
  </StrictMode>

);

