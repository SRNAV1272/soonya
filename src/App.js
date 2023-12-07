import { Box } from '@mui/material';
import './App.css';
import Navbar from './modules/common/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ width: '100%', position: 'fixed' }}>
        <Box
          px={6}
          py={2}
        >
          <Navbar />
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
