import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Text, Button } from './components';

import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Text/>
  </StrictMode>
);

