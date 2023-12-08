import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './modules/common/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
