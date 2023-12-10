import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './modules/common/Layout';
import { Provider } from 'react-redux';
import { store } from './modules/reducer/Store';

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
