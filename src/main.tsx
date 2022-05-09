import ReactDOM from 'react-dom/client';
import { App } from './App';
import { UsersProvider } from './contexts/useUsers';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UsersProvider>
    <App />
  </UsersProvider>
)
